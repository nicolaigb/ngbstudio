'use client'

import { Canvas } from '@react-three/fiber'
import React, { ReactNode } from 'react'
import * as THREE from 'three'

interface AudioVisualizerCanvasProps {
  children: ReactNode
  camera?: {
    position?: [number, number, number]
    fov?: number
    aspect?: number
    near?: number
    far?: number
  }
  background?: string | number
  className?: string
  style?: React.CSSProperties
}

export const AudioVisualizerCanvas: React.FC<AudioVisualizerCanvasProps> = ({
  children,
  camera = {
    position: [0, 0, 12],
    fov: 70,
    near: 0.1,
    far: 10000,
  },
  background = 0x000000,
  className = '',
  style = {},
}) => {
  const defaultStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    ...style,
  }

  return (
    <Canvas
      className={className}
      style={defaultStyle}
      gl={{
        antialias: true,
        alpha: true,
        autoClear: false,
      }}
      camera={{
        position: camera.position,
        fov: camera.fov,
        aspect:
          camera.aspect ||
          (typeof window !== 'undefined'
            ? window.innerWidth / window.innerHeight
            : 16 / 9),
        near: camera.near,
        far: camera.far,
      }}
      onCreated={({ gl }) => {
        // Set clear color and transparency
        gl.setClearColor(new THREE.Color(background), 0)
        if (typeof window !== 'undefined') {
          gl.setSize(window.innerWidth, window.innerHeight)
        }
      }}
    >
      {/* Ambient lighting for basic visibility */}
      <ambientLight intensity={0.1} />

      {/* Main content */}
      <group name="audioVisualizerHolder">{children}</group>
    </Canvas>
  )
}
