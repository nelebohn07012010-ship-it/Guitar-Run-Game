
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

    const fundamentalFrequency = service.getFundamentalFrequency(data)

    console.log("Grundfrequenz:", fundamentalFrequency)

    if (fundamentalFrequency === null) {
      return
    }

    const matchingNotes =
      service.getClosestNote(
        fundamentalFrequency.frequency
      )

    console.log("Mögliche Positionen:", matchingNotes)
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