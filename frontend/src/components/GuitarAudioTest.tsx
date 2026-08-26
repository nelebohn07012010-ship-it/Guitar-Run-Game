
import GuitarAudioService from "../services/GuitarAudioService"
import { useRef } from "react"

const GuitarAudioTest = () => {
  const guitarAudioService = useRef<GuitarAudioService | null>(null)
  const data = guitarAudioService.current?.getFrequencyData()
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

    const intensity = service.getHighEIntensity(data)

    if (intensity === null) {
      console.log("Keine hohe E-Intensität")
      return
    }

    console.log("Hohe E-Saite Intensität:", intensity)

    const strongestFrequencies =
      service.getStrongestFrequencies(data)

    console.log("Starke Frequenzen:", strongestFrequencies)

    if (intensity > 100) {
      console.log("HOHE E-SAITEN ERKANNT!")
    } else {
      console.log("Kein Gitarrenton")
    }
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