'use client'

import React, { useEffect, useRef } from 'react'

import { AudioController } from '@/components/audio/AudioController'
import { AudioVisualizerCanvas } from '@/components/audio/AudioVisualizerCanvas'
import { ReactiveParticles } from '@/components/audio/ReactiveParticles'

// Sample audio URL - replace with your desired track
const AUDIO_URL =
  'https://p.scdn.co/mp3-preview/3be3fb77f5b2945c95e86d4c40ceceac20e5108f?cid=b62f0af3b0d54eca9bb49b99a2fc5820'

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

  const handlePlayStateChange = (isPlaying: boolean) => {}

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AudioController
        audioUrl={AUDIO_URL}
        autoPlay
        showControls={false}
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
