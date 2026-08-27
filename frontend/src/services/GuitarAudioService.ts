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

  getAudioData() {
    if (!this.analyser) {
      return null
    }

    const data = new Uint8Array(this.analyser.fftSize)

    this.analyser.getByteTimeDomainData(data)

    return data
  }

  getFrequencyData() {
    if (!this.analyser) {
      return null
    }

    const data = new Uint8Array(this.analyser.frequencyBinCount)
    this.analyser.getByteFrequencyData(data)

    return data
  }

  getSampleRate() {
    if (!this.audioContext) {
      return null
    }

    return this.audioContext.sampleRate
  }

  getStringIntensity(
    data: Uint8Array,
    targetFrequency: number,
    range: number = 10
  ) {
    if (
      this.analyser === null ||
      this.audioContext === null
    ) {
      return null
    }

    const sampleRate = this.audioContext.sampleRate
    const fftSize = this.analyser.fftSize

    const startFrequency = targetFrequency - range
    const endFrequency = targetFrequency + range

    const startBin = Math.floor(
      startFrequency * fftSize / sampleRate
    )

    const endBin = Math.ceil(
      endFrequency * fftSize / sampleRate
    )

    let maxIntensity = 0
    let strongestBin = startBin

    for (let bin = startBin; bin <= endBin; bin++) {
      if (bin < 0 || bin >= data.length) {
        continue
      }

      const intensity = data[bin]

      if (intensity > maxIntensity) {
        maxIntensity = intensity
        strongestBin = bin
      }
    }

    const detectedFrequency =
      strongestBin * sampleRate / fftSize

    return {
      frequency: detectedFrequency,
      intensity: maxIntensity,
    }
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

      let totalIntensity = 0

      for (let j = 0; j < data.length; j++) {
        totalIntensity += data[j]
      }

      const averageIntensity =
        totalIntensity / data.length

      samples.push(averageIntensity)

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

    return this.noiseFloor
  }

  getStrongestFrequencies(data: Uint8Array) {
    if (!this.analyser || !this.audioContext) {
      return null
    }

    const frequencies = []

    for (let i = 0; i < data.length; i++) {
      if (data[i] > 100) {
        const frequency =
          i * this.audioContext.sampleRate / this.analyser.fftSize

        frequencies.push({
          frequency: Math.round(frequency),
          intensity: data[i]
        })
      }
    }

    return frequencies
  }



}

export default GuitarAudioService