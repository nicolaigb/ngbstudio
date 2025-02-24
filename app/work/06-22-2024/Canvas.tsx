'use client'

import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import vertexShader from './vertexShader.glsl' // Fixed the typo in the import name
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
    if (meshRef.current && meshRef.current.material) {
      // Access the shader material safely
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.u_time.value = clock.elapsedTime
    }
  })

  return (
    <mesh position={[0, 0, 0]} ref={meshRef}>
      <planeGeometry args={[1.5, 1.5, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        side={THREE.DoubleSide} // Added to make sure the plane is visible from both sides
      />
    </mesh>
  )
}

export default function ThreeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <pointLight position={[10, 10, 10]} /> // Changed from args to position
      <Flyer />
    </Canvas>
  )
}
