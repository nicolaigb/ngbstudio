'use client'

import { useFrame } from '@react-three/fiber'
import React, { useRef, useMemo, ReactNode } from 'react'
import * as THREE from 'three'

export interface Uniforms {
  time: { value: number }
  amplitude: { value: number }
  frequency: { value: number }
  [key: string]: { value: any }
}

export interface ParticleSystemProps {
  geometry?: THREE.BufferGeometry
  vertexShader: string
  fragmentShader: string
  uniforms?: Partial<Uniforms>
  transparent?: boolean
  side?: THREE.Side
  children?: ReactNode
  onFrame?: (t?: number) => Partial<Uniforms>
}

export const ParticleSystem: React.FC<ParticleSystemProps> = ({
  geometry,
  vertexShader,
  fragmentShader,
  uniforms = {},
  transparent = true,
  side = THREE.DoubleSide,
  children,
  onFrame,
}) => {
  const meshRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const timeRef = useRef(0)

  // Default geometry (simple box if none provided)
  const defaultGeometry = useMemo(
    () => new THREE.BoxGeometry(1, 1, 1, 10, 10, 10),
    [],
  )

  // Base uniforms that all particle systems should have
  const baseUniforms = useMemo(
    () => ({
      time: { value: 0 },
      amplitude: { value: 1.0 },
      frequency: { value: 0.8 },
      ...uniforms,
    }),
    [uniforms],
  )

  // Shader material
  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        side,
        vertexShader,
        fragmentShader,
        transparent,
        uniforms: baseUniforms,
      }),
    [vertexShader, fragmentShader, transparent, side, baseUniforms],
  )

  // Update uniforms on each frame
  useFrame((state, delta) => {
    if (!materialRef.current) return

    // Update time
    timeRef.current += delta
    materialRef.current.uniforms.time.value = timeRef.current

    // Call custom frame handler if provided
    if (onFrame) {
      const uniformsUpdates = onFrame(timeRef.current)
      Object.assign(materialRef.current.uniforms, uniformsUpdates)
    }
  })

  const selectedGeometry = geometry || defaultGeometry

  return (
    <group>
      <points ref={meshRef} geometry={selectedGeometry}>
        <shaderMaterial
          ref={materialRef}
          attach="material"
          {...shaderMaterial}
        />
      </points>
      {children}
    </group>
  )
}

// Utility function to create common geometries
export const createParticleGeometry = {
  box: (
    width = 1,
    height = 1,
    depth = 1,
    widthSeg = 10,
    heightSeg = 10,
    depthSeg = 10,
  ) =>
    new THREE.BoxGeometry(width, height, depth, widthSeg, heightSeg, depthSeg),

  cylinder: (
    radiusTop = 1,
    radiusBottom = 1,
    height = 4,
    radialSegments = 32,
    heightSegments = 32,
    openEnded = true,
  ) =>
    new THREE.CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
    ),

  sphere: (radius = 1, widthSegments = 32, heightSegments = 32) =>
    new THREE.SphereGeometry(radius, widthSegments, heightSegments),

  plane: (width = 2, height = 2, widthSegments = 32, heightSegments = 32) =>
    new THREE.PlaneGeometry(width, height, widthSegments, heightSegments),
}

// Common shader snippets that can be reused
export const shaderSnippets = {
  noise: `
    vec3 mod289(vec3 x){
      return x-floor(x*(1./289.))*289.;
    }

    vec2 mod289(vec2 x){
      return x-floor(x*(1./289.))*289.;
    }

    vec3 permute(vec3 x){
      return mod289(((x*34.)+1.)*x);
    }

    float noise(vec2 v) {
      const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);
      vec2 i=floor(v+dot(v,C.yy));
      vec2 x0=v-i+dot(i,C.xx);

      vec2 i1;
      i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);
      vec4 x12=x0.xyxy+C.xxzz;
      x12.xy-=i1;

      i=mod289(i);
      vec3 p=permute(permute(i.y+vec3(0.,i1.y,1.))
      +i.x+vec3(0.,i1.x,1.));

      vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);
      m=m*m;
      m=m*m;

      vec3 x=2.*fract(p*C.www)-1.;
      vec3 h=abs(x)-.5;
      vec3 ox=floor(x+.5);
      vec3 a0=x-ox;

      m*=1.79284291400159-.85373472095314*(a0*a0+h*h);

      vec3 g;
      g.x=a0.x*x0.x+h.x*x0.y;
      g.yz=a0.yz*x12.xz+h.yz*x12.yw;
      return 130.*dot(m,g);
    }
  `,

  circle: `
    float circle(in vec2 _st,in float _radius){
      vec2 dist=_st-vec2(.5);
      return 1.-smoothstep(_radius-(_radius*.01),
      _radius+(_radius*.01),
      dot(dist,dist)*4.);
    }
  `,
}
