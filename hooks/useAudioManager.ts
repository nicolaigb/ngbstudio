import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'

interface FrequencyData {
  low: number
  mid: number
  high: number
}

interface AudioManagerHook {
  frequencyData: FrequencyData
  isPlaying: boolean
  isLoaded: boolean
  loadAudio: (url: string) => Promise<void>
  play: () => void
  pause: () => void
  audioBuffer: AudioBuffer | null
}

export const useAudioManager = (): AudioManagerHook => {
  const audioRef = useRef<THREE.Audio | null>(null)
  const audioAnalyserRef = useRef<THREE.AudioAnalyser | null>(null)
  const audioListenerRef = useRef<THREE.AudioListener | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  const [frequencyData, setFrequencyData] = useState<FrequencyData>({
    low: 0,
    mid: 0,
    high: 0,
  })

  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null)

  const bufferLengthRef = useRef(0)

  // Frequency ranges (Hz)
  const LOW_FREQUENCY = 10
  const MID_FREQUENCY = 150
  const HIGH_FREQUENCY = 9000

  const calculateAverage = useCallback(
    (array: Uint8Array, start: number, end: number): number => {
      let sum = 0
      for (let i = start; i <= end; i += 1) {
        sum += array[i]
      }
      return sum / (end - start + 1)
    },
    [],
  )

  const normalizeValue = useCallback((value: number): number => value / 256, [])

  const analyzeFrequency = useCallback(
    (frequencyArray: Uint8Array) => {
      if (!audioContextRef.current || !bufferLengthRef.current) return

      const { sampleRate } = audioContextRef.current

      const lowFreqRangeStart = Math.floor(
        (LOW_FREQUENCY * bufferLengthRef.current) / sampleRate,
      )
      const lowFreqRangeEnd = Math.floor(
        (MID_FREQUENCY * bufferLengthRef.current) / sampleRate,
      )
      const midFreqRangeStart = Math.floor(
        (MID_FREQUENCY * bufferLengthRef.current) / sampleRate,
      )
      const midFreqRangeEnd = Math.floor(
        (HIGH_FREQUENCY * bufferLengthRef.current) / sampleRate,
      )
      const highFreqRangeStart = Math.floor(
        (HIGH_FREQUENCY * bufferLengthRef.current) / sampleRate,
      )
      const highFreqRangeEnd = bufferLengthRef.current - 1

      const lowAvg = normalizeValue(
        calculateAverage(frequencyArray, lowFreqRangeStart, lowFreqRangeEnd),
      )
      const midAvg = normalizeValue(
        calculateAverage(frequencyArray, midFreqRangeStart, midFreqRangeEnd),
      )
      const highAvg = normalizeValue(
        calculateAverage(frequencyArray, highFreqRangeStart, highFreqRangeEnd),
      )

      setFrequencyData({
        low: lowAvg,
        mid: midAvg,
        high: highAvg,
      })
    },
    [calculateAverage, normalizeValue],
  )

  const loadAudio = useCallback(
    async (url: string): Promise<void> =>
      new Promise((resolve, reject) => {
        try {
          const audioListener = new THREE.AudioListener()
          const audio = new THREE.Audio(audioListener)
          const audioLoader = new THREE.AudioLoader()

          audioLoader.load(
            url,
            (buffer) => {
              audio.setBuffer(buffer)
              audio.setLoop(true)
              audio.setVolume(0.5)

              audioRef.current = audio
              audioListenerRef.current = audioListener
              audioContextRef.current = audio.context
              setAudioBuffer(buffer)

              const audioAnalyser = new THREE.AudioAnalyser(audio, 1024)
              audioAnalyserRef.current = audioAnalyser
              bufferLengthRef.current = audioAnalyser.data.length

              setIsLoaded(true)
              resolve()
            },
            undefined,
            (error) => {
              console.error('Error loading audio:', error)
              reject(error)
            },
          )
        } catch (error) {
          console.error('Error in loadAudio:', error)
          reject(error)
        }
      }),
    [],
  )

  const play = useCallback(() => {
    if (audioRef.current && isLoaded) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [isLoaded])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [])

  // Update frequency data on each frame
  useEffect(() => {
    let animationId: number

    const updateAudioData = () => {
      if (audioAnalyserRef.current && isPlaying) {
        const frequencyArray = audioAnalyserRef.current.getFrequencyData()
        analyzeFrequency(frequencyArray)
      }
      animationId = requestAnimationFrame(updateAudioData)
    }

    if (isPlaying) {
      updateAudioData()
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPlaying, analyzeFrequency])

  // Cleanup
  useEffect(
    () => () => {
      if (audioRef.current) {
        audioRef.current.stop()
      }
    },
    [],
  )

  return {
    frequencyData,
    isPlaying,
    isLoaded,
    loadAudio,
    play,
    pause,
    audioBuffer,
  }
}
