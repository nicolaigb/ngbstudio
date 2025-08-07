import { useEffect, useRef, useState, useCallback } from 'react'
import { guess } from 'web-audio-beat-detector'

interface BPMManagerHook {
  bpm: number
  isDetecting: boolean
  detectBPM: (audioBuffer: AudioBuffer) => Promise<void>
  getBPMDuration: () => number
  onBeat: (callback: () => void) => () => void
}

export const useBPMManager = (): BPMManagerHook => {
  const [bpm, setBpm] = useState(0)
  const [isDetecting, setIsDetecting] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const beatCallbacksRef = useRef<Set<() => void>>(new Set())
  const intervalDurationRef = useRef(500)

  const getBPMDuration = useCallback(() => intervalDurationRef.current, [])

  const triggerBeat = useCallback(() => {
    beatCallbacksRef.current.forEach((callback) => {
      try {
        callback()
      } catch (error) {
        console.error('Error in beat callback:', error)
      }
    })
  }, [])

  const setBPMValue = useCallback(
    (bpmValue: number) => {
      setBpm(bpmValue)
      intervalDurationRef.current = 60000 / bpmValue

      // Clear existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      // Start new interval for beat events
      intervalRef.current = setInterval(
        triggerBeat,
        intervalDurationRef.current,
      )
    },
    [triggerBeat],
  )

  const detectBPM = useCallback(
    async (audioBuffer: AudioBuffer): Promise<void> => {
      setIsDetecting(true)
      try {
        const { bpm: detectedBPM } = await guess(audioBuffer)
        setBPMValue(detectedBPM)
        console.log(`BPM detected: ${detectedBPM}`)
      } catch (error) {
        console.error('Error detecting BPM:', error)
        // Fallback to default BPM
        setBPMValue(120)
      } finally {
        setIsDetecting(false)
      }
    },
    [setBPMValue],
  )

  const onBeat = useCallback((callback: () => void): (() => void) => {
    beatCallbacksRef.current.add(callback)

    // Return cleanup function
    return () => {
      beatCallbacksRef.current.delete(callback)
    }
  }, [])

  // Cleanup interval on unmount
  useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    },
    [],
  )

  return {
    bpm,
    isDetecting,
    detectBPM,
    getBPMDuration,
    onBeat,
  }
}
