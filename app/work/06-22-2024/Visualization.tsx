/* eslint-disable */
// @ts-nocheck

'use client'

import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

import vertextShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'

const Flyer = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    [],
  )

  useFrame((state) => {
    const { clock } = state
    if (meshRef.current) {
      meshRef.current.material.uniforms.u_time.value = clock.elapsedTime
    }
  })

  return (
    <mesh position={[0, 0, 0]} ref={meshRef}>
      <planeGeometry args={[1.5, 1.5, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertextShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}

export default function Visualization() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <pointLight args={[10, 10, 10]} />
      <Flyer />
    </Canvas>
  )
}
