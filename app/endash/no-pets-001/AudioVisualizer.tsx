'use client'

import React, { useRef } from 'react'

import { AudioController } from '@/components/audio/AudioController'
import { AudioVisualizerCanvas } from '@/components/audio/AudioVisualizerCanvas'
import { ReactiveParticles } from '@/components/audio/ReactiveParticles'

// Sample audio URL - replace with your desired track
const AUDIO_URL = '/flight-fm.mp3'

export default function AudioVisualizer() {
  const particlesRef = useRef<{
    autoMix: boolean
    autoRotate: boolean
    startColor: number
    endColor: number
  }>({
    autoMix: true,
    autoRotate: true,
    startColor: 0xff00ff,
    endColor: 0x00ffff,
  })

  const handleAudioReady = () => {}

  const handlePlayStateChange = () => {}

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <AudioController
        audioUrl={AUDIO_URL}
        autoPlay
        showControls
        onAudioReady={handleAudioReady}
        onPlayStateChange={handlePlayStateChange}
      >
        <AudioVisualizerCanvas
          camera={{
            position: [0, 0, 12],
            fov: 70,
            near: 0.1,
            far: 10000,
          }}
          background={0x000000}
        >
          <ReactiveParticles
            autoMix={particlesRef.current.autoMix}
            autoRotate={particlesRef.current.autoRotate}
            startColor={particlesRef.current.startColor}
            endColor={particlesRef.current.endColor}
          />
        </AudioVisualizerCanvas>
      </AudioController>
    </div>
  )
}
