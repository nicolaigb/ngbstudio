'use client'

import clsx from 'clsx'
import React, { ReactNode, useEffect, useMemo, useState } from 'react'

import { useAudioManager } from '@/hooks/useAudioManager'
import { useBPMManager } from '@/hooks/useBPMManager'

import { Body, Button } from '../atoms'

import AudioControls from './AudioControls'

interface AudioControllerProps {
  children: ReactNode
  audioUrl: string
  autoPlay?: boolean
  showControls?: boolean
  className?: string
  onAudioReady?: () => void
  onPlayStateChange?: (isPlaying: boolean) => void
}

interface AudioContextType {
  frequencyData: { low: number; mid: number; high: number }
  isPlaying: boolean
  isLoaded: boolean
  bpm: number
  bpmDuration: number
  onBeat: (callback: () => void) => () => void
}

export const AudioContext = React.createContext<AudioContextType | null>(null)

export const AudioController: React.FC<AudioControllerProps> = ({
  children,
  audioUrl,
  autoPlay = false,
  showControls = false,
  className = '',
  onAudioReady,
  onPlayStateChange,
}) => {
  const audioManager = useAudioManager()
  const bpmManager = useBPMManager()
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load audio when component mounts
  useEffect(() => {
    const initializeAudio = async () => {
      await audioManager.loadAudio(audioUrl)
    }

    if (audioUrl && !isInitialized) {
      initializeAudio()
    }
  }, [audioUrl, isInitialized, audioManager])

  // Wait for audioBuffer to be available, then detect BPM
  useEffect(() => {
    const processBPM = async () => {
      if (audioManager.audioBuffer && !isInitialized) {
        await bpmManager.detectBPM(audioManager.audioBuffer)

        setIsInitialized(true)
        onAudioReady?.()
      }
    }

    processBPM()
  }, [audioManager.audioBuffer, isInitialized, bpmManager, onAudioReady])

  // Handle user interaction to start audio
  const handleUserInteraction = () => {
    if (audioManager.isLoaded && !hasUserInteracted) {
      setHasUserInteracted(true)
      if (autoPlay) {
        audioManager.play()
      }
    }
  }

  // Handle play state changes
  useEffect(() => {
    onPlayStateChange?.(audioManager.isPlaying)
  }, [audioManager.isPlaying, onPlayStateChange])

  // Manual play/pause controls
  const handlePlay = () => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true)
    }
    audioManager.play()
  }

  const handlePause = () => {
    audioManager.pause()
  }

  const contextValue: AudioContextType = useMemo(
    () => ({
      frequencyData: audioManager.frequencyData,
      isPlaying: audioManager.isPlaying,
      isLoaded: audioManager.isLoaded,
      bpm: bpmManager.bpm,
      bpmDuration: bpmManager.getBPMDuration(),
      onBeat: bpmManager.onBeat,
    }),
    [audioManager, bpmManager],
  )

  return (
    <AudioContext.Provider value={contextValue}>
      <div
        className={clsx('relative h-full w-full overflow-hidden', className)}
      >
        {/* User interaction overlay (shows until first interaction) */}
        {!hasUserInteracted && audioManager.isLoaded && (
          <Button
            className="absolute inset-0 z-50 flex animate-pulse cursor-pointer items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={handleUserInteraction}
          >
            <Body className="text-white">
              {bpmManager.isDetecting
                ? 'Analyzing audio...'
                : 'Click anywhere to start visualization. Warning: flashing lights.'}
            </Body>
          </Button>
        )}

        {/* Loading state */}
        {!isInitialized && (
          <div className="absolute inset-0 z-[101] flex items-center justify-center bg-black/90">
            <div className="text-base text-white">Loading audio...</div>
          </div>
        )}

        {/* Optional playback controls */}
        {showControls && hasUserInteracted && (
          <AudioControls
            title="Flight fm"
            subtitle="Joy Orbison"
            className="absolute bottom-5 left-5 z-50"
            isPlaying={audioManager.isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
          />
        )}

        {/* Visualization content */}
        {children}
      </div>
    </AudioContext.Provider>
  )
}

// Hook to use audio context in child components
export const useAudioContext = (): AudioContextType => {
  const context = React.useContext(AudioContext)
  if (!context) {
    throw new Error('useAudioContext must be used within AudioController')
  }
  return context
}
