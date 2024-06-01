/* eslint-disable */
// @ts-nocheck

'use client'

import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

import vertextShader from './vertexShader.glsl'
import fragmentShader from './fragmentShader.glsl'
import { Text } from '@atoms/Text'

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
    <SVisualization>
      <STextContainer>
        <Text>JOIN US FOR A BIRTHDAY CELEBRATION</Text>
        <Text>JUNE 22, 2024 21:00:00</Text>
        <Text>354 MYRTLE AVE, BROOKLYN</Text>
      </STextContainer>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <pointLight args={[10, 10, 10]} />
        <Flyer />
      </Canvas>
    </SVisualization>
  )
}

const SVisualization = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
`

const STextContainer = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  filter: backdrop-blur(48px);
`
