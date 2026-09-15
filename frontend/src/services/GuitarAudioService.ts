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
      let frequency = 70;
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
    }
  }



  getFundamentalFrequency(data: Uint8Array) {
    const result = this.getBestFrequencyScore(data)

    if (result === null) {
      return null
    }

    if (this.noiseFloor !== null) {
      const minimumScore = this.noiseFloor * 2.5

      if (result.score < minimumScore) {
        return null
      }
    }

    return result
  }


  getClosestNote(frequency: number) {
    const strings = [
      { name: "Tiefe E", frequency: 82.41 },
      { name: "A", frequency: 110.0 },
      { name: "D", frequency: 146.83 },
      { name: "G", frequency: 196.0 },
      { name: "H", frequency: 246.94 },
      { name: "Hohe E", frequency: 329.63 },
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

  async calibrateNoiseFloor() {
    if (!this.analyser) {
      return null
    }

    const samples: number[] = []

    for (let i = 0; i < 20; i++) {
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

    const average =
      samples.reduce(
        (sum, value) => sum + value,
        0
      ) / samples.length

    this.noiseFloor = average

    console.log("Noise Floor:", this.noiseFloor)

    return this.noiseFloor
  }
}

export default GuitarAudioService