type GuitarChord = {
  name: string
  notes: string[]
}

const guitarChords: GuitarChord[] = [
  {
    name: "C",
    notes: ["C", "E", "G"]
  },
  {
    name: "G",
    notes: ["G", "B", "D"]
  },
  {
    name: "Am",
    notes: ["A", "C", "E"]
  },
  {
    name: "F",
    notes: ["F", "A", "C"]
  }
]

class GuitarAudioService {
  private noiseFloor: number | null = null

  private audioContext: AudioContext | null = null
  private source: MediaStreamAudioSourceNode | null = null
  private analyser: AnalyserNode | null = null

  async start() {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true
    })

    this.audioContext = new AudioContext()

    this.source = this.audioContext.createMediaStreamSource(stream)

    this.analyser = this.audioContext.createAnalyser()
    this.analyser.fftSize = 16384
    this.analyser.smoothingTimeConstant = 0

    this.source.connect(this.analyser)
    return stream
  }

  getFrequencyData() {
    if (!this.analyser) {
      return null
    }

    const data = new Uint8Array(this.analyser.frequencyBinCount)
    this.analyser.getByteFrequencyData(data)

    return data
  }

  getDetectedFrequencies(data: Uint8Array) {
    if (!this.analyser || !this.audioContext) return []

    const sampleRate = this.audioContext.sampleRate
    const fftSize = this.analyser.fftSize

    const frequencies: {
      frequency: number
      intensity: number
    }[] = []

    for (let bin = 1; bin < data.length - 1; bin++) {
      const intensity = data[bin]

      if (
        intensity <= data[bin - 1] ||
        intensity <= data[bin + 1]
      ) {
        continue
      }

      if (intensity < 30) continue

      const frequency =
        bin * sampleRate / fftSize

      if (frequency < 70 || frequency > 350) continue

      frequencies.push({
        frequency,
        intensity
      })
    }

    frequencies.sort(
      (a, b) => b.intensity - a.intensity
    )

    return frequencies
      .slice(0, 6)
      .map(item => item.frequency)
  }

  getDetectedChordFrequencies(data: Uint8Array) {
    const frequencies = this.getDetectedFrequencies(data)

    const detectedFrequencies: number[] = []

    for (const frequency of frequencies) {
      const positions = this.getClosestNote(frequency)

      if (!positions) continue

      const alreadyDetected = detectedFrequencies.some(
        detectedFrequency =>
          Math.abs(detectedFrequency - positions[0].targetFrequency) < 1
      )

      if (alreadyDetected) continue

      detectedFrequencies.push(
        positions[0].targetFrequency
      )
    }

    return detectedFrequencies
  }

  getSignalLevel(data: Uint8Array) {
    let sum = 0

    for (const value of data) {
      sum += value
    }

    return sum / data.length
  }

  setNoiseFloor(noiseFloor: number) {
    this.noiseFloor = noiseFloor
  }

  private getBestFrequencyScore(data: Uint8Array) {
    if (
      this.analyser === null ||
      this.audioContext === null
    ) {
      return null
    }

    const sampleRate = this.audioContext.sampleRate
    const fftSize = this.analyser.fftSize

    let bestFrequency = 0
    let bestScore = 0

    const getIntensity = (frequency: number) => {
      const targetBin = Math.round(
        frequency * fftSize / sampleRate
      )

      let maxIntensity = 0

      for (let offset = -2; offset <= 2; offset++) {
        const bin = targetBin + offset

        if (bin < 0 || bin >= data.length) {
          continue
        }

        const intensity = data[bin]

        if (intensity > maxIntensity) {
          maxIntensity = intensity
        }
      }

      return maxIntensity
    }

    for (
      let frequency = 80;
      frequency <= 350;
      frequency += 1
    ) {
      const fundamentalIntensity =
        getIntensity(frequency)

      const secondHarmonicIntensity =
        getIntensity(frequency * 2)

      const thirdHarmonicIntensity =
        getIntensity(frequency * 3)

      const fourthHarmonicIntensity =
        getIntensity(frequency * 4)

      const score =
        fundamentalIntensity +
        secondHarmonicIntensity * 0.7 +
        thirdHarmonicIntensity * 0.5 +
        fourthHarmonicIntensity * 0.3

      if (score > bestScore) {
        bestScore = score
        bestFrequency = frequency
      }
    }

    return {
      frequency: bestFrequency,
      score: bestScore,
      fundamentalIntensity: getIntensity(bestFrequency),
      secondHarmonicIntensity: getIntensity(bestFrequency * 2),
      thirdHarmonicIntensity: getIntensity(bestFrequency * 3),
      fourthHarmonicIntensity: getIntensity(bestFrequency * 4),
    }
  }



  getFundamentalFrequency(data: Uint8Array) {
    const result = this.getBestFrequencyScore(data)

    if (result === null) {
      return null
    }

    const signalLevel = this.getSignalLevel(data)
    let minimumScore: number | null = null

    if (this.noiseFloor !== null) {
      if (this.noiseFloor !== null) {

        minimumScore =
          this.noiseFloor * 2

        if (result.score < minimumScore) {
          return null
        }
      }
    }

    return {
      ...result,
      signalLevel,
      minimumScore,
    }
  }


  getClosestNote(frequency: number) {
    const strings = [
      { name: "Low E", frequency: 82.41 },
      { name: "A", frequency: 110.0 },
      { name: "D", frequency: 146.83 },
      { name: "G", frequency: 196.0 },
      { name: "H", frequency: 246.94 },
      { name: "High E", frequency: 329.63 },
    ]

    const matches = []

    for (const string of strings) {
      for (let fret = 0; fret <= 24; fret++) {
        const targetFrequency =
          string.frequency * Math.pow(2, fret / 12)

        const differenceInSemitones =
          Math.abs(
            12 * Math.log2(
              frequency / targetFrequency
            )
          )

        if (differenceInSemitones <= 0.5) {
          matches.push({
            name: string.name,
            fret,
            targetFrequency,
            differenceInSemitones,
          })
        }
      }
    }

    if (matches.length === 0) {
      return null
    }

    return matches
  }

  getChordDefinitions() {
    return guitarChords
  }

  getDetectedNotes(frequencies: number[]) {
    const detectedNotes = new Set<string>()

    for (const frequency of frequencies) {
      const positions = this.getClosestNote(frequency)

      if (!positions) continue

      detectedNotes.add(positions[0].name)
    }

    return Array.from(detectedNotes)
  }

  getDetectedChord(data: Uint8Array) {
    const frequencies =
      this.getDetectedChordFrequencies(data)

    const detectedNotes =
      this.getDetectedNotes(frequencies)

    for (const chord of guitarChords) {
      const matchesAllNotes =
        chord.notes.every(note =>
          detectedNotes.includes(note)
        )

      if (matchesAllNotes) {
        return chord.name
      }
    }

    return null
  }

  async calibrateNoiseFloor() {
    if (!this.analyser) {
      return null
    }

    const samples: number[] = []

    for (let i = 0; i < 100; i++) {
      const data = this.getFrequencyData()

      if (data === null) {
        continue
      }

      const result = this.getBestFrequencyScore(data)

      if (result !== null) {
        samples.push(result.score)
      }

      await new Promise(resolve =>
        setTimeout(resolve, 50)
      )
    }

    if (samples.length === 0) {
      return null
    }

    samples.sort((a, b) => a - b)

    const middle = Math.floor(samples.length / 2)

    const noiseFloor =
      samples.length % 2 === 0
        ? (samples[middle - 1] + samples[middle]) / 2
        : samples[middle]

    this.noiseFloor = noiseFloor

    console.log("Score Noise Floor:", noiseFloor)

    return noiseFloor
  }
}


export default GuitarAudioService
