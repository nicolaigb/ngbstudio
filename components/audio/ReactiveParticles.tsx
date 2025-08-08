'use client'

import gsap from 'gsap'
import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react'
import * as THREE from 'three'

import { useAudioContext } from './AudioController'
import {
  ParticleSystem,
  createParticleGeometry,
  shaderSnippets,
  Uniforms,
} from './ParticleSystem'

export interface ReactiveParticlesProps {
  autoMix?: boolean
  autoRotate?: boolean
  startColor?: number
  endColor?: number
}

export const ReactiveParticles: React.FC<ReactiveParticlesProps> = ({
  autoMix = true,
  autoRotate = true,
  startColor = 0xff00ff,
  endColor = 0x00ffff,
}) => {
  const holderRef = useRef<THREE.Group>(null)
  const [geometryType, setGeometryType] = useState<'box' | 'cylinder'>('box')
  const [geometryKey, setGeometryKey] = useState(0)
  const { onBeat, bpmDuration, isPlaying, frequencyData } = useAudioContext()

  // Generate random geometry parameters
  const geometryParams = useMemo(() => {
    if (geometryType === 'cylinder') {
      const radialSeg = Math.floor(THREE.MathUtils.randInt(1, 3))
      const heightSeg = Math.floor(THREE.MathUtils.randInt(1, 5))
      return {
        geometry: createParticleGeometry.cylinder(
          1,
          1,
          4,
          64 * radialSeg,
          64 * heightSeg,
          true,
        ),
        offsetSize: Math.floor(THREE.MathUtils.randInt(30, 60)),
        size: 2,
      }
    }
    const widthSeg = Math.floor(THREE.MathUtils.randInt(5, 20))
    const heightSeg = Math.floor(THREE.MathUtils.randInt(1, 40))
    const depthSeg = Math.floor(THREE.MathUtils.randInt(5, 80))
    return {
      geometry: createParticleGeometry.box(
        1,
        1,
        1,
        widthSeg,
        heightSeg,
        depthSeg,
      ),
      offsetSize: Math.floor(THREE.MathUtils.randInt(30, 60)),
      size: 1.1,
    }
  }, [geometryType])

  // Vertex shader with curl noise
  const vertexShader = `
    varying float vDistance;

    uniform float time;
    uniform float offsetSize;
    uniform float size;
    uniform float offsetGain;
    uniform float amplitude;
    uniform float frequency;
    uniform float maxDistance;

    ${shaderSnippets.noise}

    vec3 curl(float x,float y,float z) {
      float eps=1.,eps2=2.*eps;
      float n1,n2,a,b;

      x+=time*.05;
      y+=time*.05;
      z+=time*.05;

      vec3 curl=vec3(0.);

      n1=noise(vec2(x,y+eps));
      n2=noise(vec2(x,y-eps));
      a=(n1-n2)/eps2;

      n1=noise(vec2(x,z+eps));
      n2=noise(vec2(x,z-eps));
      b=(n1-n2)/eps2;

      curl.x=a-b;

      n1=noise(vec2(y,z+eps));
      n2=noise(vec2(y,z-eps));
      a=(n1-n2)/eps2;

      n1=noise(vec2(x+eps,z));
      n2=noise(vec2(x+eps,z));
      b=(n1-n2)/eps2;

      curl.y=a-b;

      n1=noise(vec2(x+eps,y));
      n2=noise(vec2(x-eps,y));
      a=(n1-n2)/eps2;

      n1=noise(vec2(y+eps,z));
      n2=noise(vec2(y-eps,z));
      b=(n1-n2)/eps2;

      curl.z=a-b;

      return curl;
    }

    void main() {
      vec3 newpos = position;
      vec3 target = position + (normal*.1) + curl(newpos.x * frequency, newpos.y * frequency, newpos.z * frequency) * amplitude;

      float d = length(newpos - target) / maxDistance;
      newpos = mix(position, target, pow(d, 4.));
      newpos.z += sin(time) * (.1 * offsetGain);

      vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.);
      gl_PointSize = size + (pow(d,3.) * offsetSize) * (1./-mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;

      vDistance = d;
    }
  `

  // Fragment shader with gradient colors
  const fragmentShader = `
    varying float vDistance;

    uniform vec3 startColor;
    uniform vec3 endColor;

    ${shaderSnippets.circle}

    void main(){
      vec2 uv = vec2(gl_PointCoord.x,1.-gl_PointCoord.y);
      vec3 circ = vec3(circle(uv,1.));

      vec3 color = mix(startColor,endColor,vDistance);
      gl_FragColor=vec4(color,circ.r * vDistance);
    }
  `

  // Uniforms for the particle system
  const uniforms: Partial<Uniforms> = useMemo(
    () => ({
      offsetSize: { value: geometryParams.offsetSize },
      size: { value: geometryParams.size },
      offsetGain: { value: 0 },
      maxDistance: { value: 1.8 },
      startColor: { value: new THREE.Color(startColor) },
      endColor: { value: new THREE.Color(endColor) },
    }),
    [startColor, endColor, geometryParams.offsetSize, geometryParams.size],
  )

  // Custom frame update logic
  const onFrameHandler = useCallback(
    (time: number) => {
      const uniformsUpdates: Partial<Uniforms> = {}

      if (isPlaying) {
        // Dynamically update amplitude based on the high frequency data from the audio manager
        uniformsUpdates.amplitude = {
          value:
            0.8 +
            THREE.MathUtils.mapLinear(frequencyData.high, 0, 0.6, -0.1, 0.2),
        }

        // Update offset gain based on the low frequency data for subtle effect changes
        uniformsUpdates.offsetGain = { value: frequencyData.mid * 0.6 }

        // Map low frequency data to a range and use it to increment the time uniform
        const t = THREE.MathUtils.mapLinear(frequencyData.low, 0.6, 1, 0.2, 0.5)
        uniformsUpdates.time = {
          value: time + THREE.MathUtils.clamp(t, 0.2, 0.5),
        } // Clamp the value to ensure it stays within a desired range
      } else {
        uniformsUpdates.frequency = { value: 0.8 }
        uniformsUpdates.amplitude = { value: 1.0 }
        uniformsUpdates.offsetGain = { value: 0 }
      }

      return uniformsUpdates
    },
    [isPlaying, frequencyData],
  )

  // Handle BPM beat events
  useEffect(() => {
    const cleanup = onBeat(() => {
      if (!isPlaying || !holderRef.current) return

      // Random rotation
      if (Math.random() < 0.3 && autoRotate) {
        gsap.to(holderRef.current.rotation, {
          duration: Math.random() < 0.8 ? 15 : bpmDuration / 1000,
          z: Math.random() * Math.PI,
          ease: 'elastic.out(0.2)',
        })
      }

      // Random geometry change
      if (Math.random() < 0.3 && autoMix) {
        setGeometryType((prev) => (prev === 'cylinder' ? 'box' : 'cylinder'))
        setGeometryKey((prev) => prev + 1) // Force geometry regeneration
      }
    })

    return cleanup
  }, [onBeat, isPlaying, autoRotate, autoMix, bpmDuration])

  // Setup initial position and rotation animations
  useEffect(() => {
    if (!holderRef.current) return

    // Set initial rotation based on geometry type
    const rotation =
      geometryType === 'cylinder'
        ? { x: Math.PI / 2, y: 0, z: 0 }
        : { x: Math.PI / 2, y: 0, z: 0 }

    gsap.set(holderRef.current.rotation, rotation)

    // Animate position
    gsap.to(holderRef.current.position, {
      duration: 0.6,
      z: THREE.MathUtils.randInt(9, 11),
      ease: 'elastic.out(0.8)',
    })

    // Box-specific rotation animation
    if (geometryType === 'box') {
      gsap.to(holderRef.current.rotation, {
        duration: 3,
        x: Math.random() * Math.PI,
        z: Math.random() * Math.PI * 2,
        ease: 'none',
      })
    }

    // Cylinder-specific positioning
    if (geometryType === 'cylinder' && Math.random() < 0.2) {
      gsap.to(holderRef.current.rotation, {
        duration: 0.2,
        y: Math.PI / 2,
        ease: 'elastic.out(0.2)',
      })
    }
  }, [geometryType, geometryKey])

  return (
    <group ref={holderRef} name="reactiveParticles">
      <ParticleSystem
        key={geometryKey} // Force recreation when geometry changes
        geometry={geometryParams.geometry}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        onFrame={onFrameHandler}
      />
    </group>
  )
}
