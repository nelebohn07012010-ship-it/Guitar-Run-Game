
import GuitarAudioService from "../services/GuitarAudioService"
import { useRef } from "react"

const GuitarAudioTest = () => {
  const guitarAudioService = useRef<GuitarAudioService | null>(null)
  const handleStart = async () => {
    guitarAudioService.current = new GuitarAudioService()

    const stream = await guitarAudioService.current.start()

    console.log("Mikrofon gestartet:", stream)
  }

  const handleTest = () => {
    const service = guitarAudioService.current

    if (!service) {
      console.log("Mikrofon wurde noch nicht gestartet")
      return
    }

    const data = service.getFrequencyData()

    if (data === null) {
      console.log("Keine Audiodaten")
      return
    }


    const strings = [
      {
        name: "Tiefe E",
        targetFrequency: 82.41,
        result: service.getStringIntensity(data, 82.41),
      },
      {
        name: "A",
        targetFrequency: 110,
        result: service.getStringIntensity(data, 110),
      },
      {
        name: "D",
        targetFrequency: 146.83,
        result: service.getStringIntensity(data, 146.83),
      },
      {
        name: "G",
        targetFrequency: 196,
        result: service.getStringIntensity(data, 196),
      },
      {
        name: "H",
        targetFrequency: 246.94,
        result: service.getStringIntensity(data, 246.94),
      },
      {
        name: "Hohe E",
        targetFrequency: 329.63,
        result: service.getStringIntensity(data, 329.63),
      },
    ]

    const frequencyTolerance = 10

    const possibleStrings = strings.filter((string) => {
      if (string.result === null) {
        return false
      }

      const frequencyDifference = Math.abs(
        string.result.frequency - string.targetFrequency
      )

      return frequencyDifference <= frequencyTolerance
    })


    const detectedString = possibleStrings
      .sort((a, b) => {
        return (
          b.result!.intensity -
          a.result!.intensity
        )
      })[0]

    console.log("Mögliche Saiten:", possibleStrings)
    console.log("Erkannte Saite:", detectedString)
  }


  const handleCalibration = async () => {
    if (!guitarAudioService.current) {
      console.log("Mikrofon wurde noch nicht gestartet")
    }

    console.log("Kalibrierung startet - bitte NICHT spielen!")

    const noiseFloor = await guitarAudioService.current?.calibrateNoiseFloor()

    console.log("Noise Floor:", noiseFloor)
  }



  return (
    <div>
      <button onClick={handleStart}>
        🎸 Mikrofon starten
      </button>

      <button onClick={handleTest}>
        Audiodaten testen
      </button>

      <button onClick={handleCalibration}>
        Hintergrundgeräusch kalibrieren
      </button>
    </div>
  )
}

export default GuitarAudioTest