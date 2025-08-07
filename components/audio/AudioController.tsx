'use client'

import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { useAudioManager } from '@/hooks/useAudioManager'
import { useBPMManager } from '@/hooks/useBPMManager'

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

      if (audioManager.audioBuffer) {
        await bpmManager.detectBPM(audioManager.audioBuffer)
      }

      setIsInitialized(true)
      onAudioReady?.()
    }

    if (audioUrl && !isInitialized) {
      initializeAudio()
    }
  }, [audioUrl, isInitialized, onAudioReady, audioManager, bpmManager])

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
      <SContainer className={className}>
        {/* User interaction overlay (shows until first interaction) */}
        {!hasUserInteracted && audioManager.isLoaded && (
          <SInteractionOverlay onClick={handleUserInteraction}>
            <SInteractionText>
              {bpmManager.isDetecting
                ? 'Analyzing audio...'
                : 'Click to start visualization'}
            </SInteractionText>
          </SInteractionOverlay>
        )}

        {/* Loading state */}
        {!isInitialized && (
          <SLoadingOverlay>
            <SLoadingText>Loading audio...</SLoadingText>
          </SLoadingOverlay>
        )}

        {/* Optional playback controls */}
        {showControls && hasUserInteracted && (
          <SControls>
            <SControlButton
              onClick={handlePlay}
              disabled={audioManager.isPlaying}
            >
              Play
            </SControlButton>
            <SControlButton
              onClick={handlePause}
              disabled={!audioManager.isPlaying}
            >
              Pause
            </SControlButton>
            {bpmManager.bpm > 0 && (
              <SBPMDisplay>BPM: {Math.round(bpmManager.bpm)}</SBPMDisplay>
            )}
          </SControls>
        )}

        {/* Visualization content */}
        {children}
      </SContainer>
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

// Styled components
const SContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const SInteractionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`

const SInteractionText = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 20px;
`

const SLoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  z-index: 101;
`

const SLoadingText = styled.div`
  color: white;
  font-size: 1rem;
`

const SControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  z-index: 50;
`

const SControlButton = styled.button`
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const SBPMDisplay = styled.div`
  color: white;
  font-size: 0.9rem;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`
