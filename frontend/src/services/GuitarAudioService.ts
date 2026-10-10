type GuitarChord = {
  name: string
  notes: string[]
}

const guitarChords: GuitarChord[] = [
  // Dur
  { name: "C", notes: ["C", "E", "G"] },
  { name: "C#", notes: ["C#", "F", "G#"] },
  { name: "D", notes: ["D", "F#", "A"] },
  { name: "D#", notes: ["D#", "G", "A#"] },
  { name: "E", notes: ["E", "G#", "B"] },
  { name: "F", notes: ["F", "A", "C"] },
  { name: "F#", notes: ["F#", "A#", "C#"] },
  { name: "G", notes: ["G", "B", "D"] },
  { name: "G#", notes: ["G#", "C", "D#"] },
  { name: "A", notes: ["A", "C#", "E"] },
  { name: "A#", notes: ["A#", "D", "F"] },
  { name: "B", notes: ["B", "D#", "F#"] },

  // Moll
  { name: "Cm", notes: ["C", "D#", "G"] },
  { name: "C#m", notes: ["C#", "E", "G#"] },
  { name: "Dm", notes: ["D", "F", "A"] },
  { name: "D#m", notes: ["D#", "F#", "A#"] },
  { name: "Em", notes: ["E", "G", "B"] },
  { name: "Fm", notes: ["F", "G#", "C"] },
  { name: "F#m", notes: ["F#", "A", "C#"] },
  { name: "Gm", notes: ["G", "A#", "D"] },
  { name: "G#m", notes: ["G#", "B", "D#"] },
  { name: "Am", notes: ["A", "C", "E"] },
  { name: "A#m", notes: ["A#", "C#", "F"] },
  { name: "Bm", notes: ["B", "D", "F#"] },

  // Vermindert
  { name: "Cdim", notes: ["C", "D#", "F#"] },
  { name: "Ddim", notes: ["D", "F", "G#"] },
  { name: "Edim", notes: ["E", "G", "A#"] },
  { name: "Fdim", notes: ["F", "G#", "B"] },
  { name: "Gdim", notes: ["G", "A#", "C#"] },
  { name: "Adim", notes: ["A", "C", "D#"] },
  { name: "Bdim", notes: ["B", "D", "F"] },

  // Sus2
  { name: "Csus2", notes: ["C", "D", "G"] },
  { name: "Dsus2", notes: ["D", "E", "A"] },
  { name: "Esus2", notes: ["E", "F#", "B"] },
  { name: "Fsus2", notes: ["F", "G", "C"] },
  { name: "Gsus2", notes: ["G", "A", "D"] },
  { name: "Asus2", notes: ["A", "B", "E"] },
  { name: "Bsus2", notes: ["B", "C#", "F#"] },

  // Sus4
  { name: "Csus4", notes: ["C", "F", "G"] },
  { name: "Dsus4", notes: ["D", "G", "A"] },
  { name: "Esus4", notes: ["E", "A", "B"] },
  { name: "Fsus4", notes: ["F", "A#", "C"] },
  { name: "Gsus4", notes: ["G", "C", "D"] },
  { name: "Asus4", notes: ["A", "D", "E"] },
  { name: "Bsus4", notes: ["B", "E", "F#"] },

  // Powerchords
  { name: "C5", notes: ["C", "G"] },
  { name: "D5", notes: ["D", "A"] },
  { name: "E5", notes: ["E", "B"] },
  { name: "F5", notes: ["F", "C"] },
  { name: "G5", notes: ["G", "D"] },
  { name: "A5", notes: ["A", "E"] },
  { name: "B5", notes: ["B", "F#"] },
]

class GuitarAudioService {
  private noiseFloor: number | null = null
  private detectedChordNotes = new Set<string>()
  private chordDetectionStartTime: number | null = null
  private chordNoteHistory: string[][] = []
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

  getChordNotes(data: Uint8Array) {
    if (!this.analyser || !this.audioContext) {
      return []
    }

    const sampleRate = this.audioContext.sampleRate
    const fftSize = this.analyser.fftSize

    const noteFrequencies = [
      { name: "C", frequency: 130.81 },
      { name: "C#", frequency: 138.59 },
      { name: "D", frequency: 146.83 },
      { name: "D#", frequency: 155.56 },
      { name: "E", frequency: 164.81 },
      { name: "F", frequency: 174.61 },
      { name: "F#", frequency: 185.00 },
      { name: "G", frequency: 196.00 },
      { name: "G#", frequency: 207.65 },
      { name: "A", frequency: 220.00 },
      { name: "A#", frequency: 233.08 },
      { name: "B", frequency: 246.94 },
    ]

    const getIntensity = (frequency: number) => {
      const targetBin =
        Math.round(frequency * fftSize / sampleRate)

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

    const scoredNotes = noteFrequencies.map(note => {
      const fundamental = getIntensity(note.frequency)

      const secondHarmonic =
        getIntensity(note.frequency * 2)

      const thirdHarmonic =
        getIntensity(note.frequency * 3)

      const score =
        fundamental +
        secondHarmonic * 0.7 +
        thirdHarmonic * 0.5

      return {
        name: note.name,
        score,
      }
    })

    const strongestScore = Math.max(
      ...scoredNotes.map(note => note.score),
      0
    )

    const noiseThreshold = Math.max(
      this.noiseFloor !== null
        ? this.noiseFloor * 2
        : 0,
      strongestScore * 0.35
    )

    const validNotes =
      scoredNotes.filter(note =>
        note.score > noiseThreshold
      )

    validNotes.sort(
      (a, b) => b.score - a.score
    )

    return validNotes
      .slice(0, 3)
      .map(note => note.name)
  }

  addChordNotes(notes: string[]) {
    this.chordNoteHistory.push(notes)

    const now = performance.now()

    if (this.chordDetectionStartTime === null) {
      this.chordDetectionStartTime = now
    }

    if (now - this.chordDetectionStartTime > 300) {
      const noteCounts = new Map<string, number>()

      for (const frame of this.chordNoteHistory) {
        for (const note of frame) {
          noteCounts.set(
            note,
            (noteCounts.get(note) ?? 0) + 1
          )
        }
      }

      const stableNotes = Array.from(noteCounts.entries())
        .filter(([, count]) => count >= 3)
        .map(([note]) => note)

      this.detectedChordNotes =
        new Set(stableNotes)

      this.chordNoteHistory = []
      this.chordDetectionStartTime = now
    }
  }

  getNoteName(frequency: number) {
    const noteNames = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ]

    const midiNote =
      Math.round(
        12 * Math.log2(frequency / 440) + 69
      )

    return noteNames[midiNote % 12]
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
          const noteNames = [
            "C",
            "C#",
            "D",
            "D#",
            "E",
            "F",
            "F#",
            "G",
            "G#",
            "A",
            "A#",
            "B"
          ]

          const midi =
            Math.round(
              69 +
              12 *
              Math.log2(targetFrequency / 440)
            )


          matches.push({
            name: string.name,
            fret,
            note: this.getNoteName(targetFrequency),
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

  addDetectedChordNote(frequency: number) {
    const positions = this.getClosestNote(frequency)
    if (!positions) return

    if (this.chordDetectionStartTime === null) {
      this.chordDetectionStartTime = performance.now()
    }

    const elapsed =
      performance.now() - this.chordDetectionStartTime

    if (elapsed > 500) {
      this.detectedChordNotes.clear()
      this.chordDetectionStartTime = performance.now()
    }

    this.detectedChordNotes.add(positions[0].note)
  }

  getDetectedChordNotes() {
    return Array.from(this.detectedChordNotes)
  }

  clearDetectedChordNotes() {
    this.detectedChordNotes.clear()
  }

  getDetectedChord() {
    const detectedNotes = this.getDetectedChordNotes()
    console.log("Erkannte Akkordtöne:", detectedNotes)
    for (const chord of guitarChords) {
      const matchesAllNotes =
        chord.notes.every(note =>
          detectedNotes.includes(note)
        )

      const hasOnlyChordNotes =
        detectedNotes.every(note =>
          chord.notes.includes(note)
        )

      if (matchesAllNotes && hasOnlyChordNotes) {
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
