'use client'

import React from 'react'
import styled from 'styled-components'

export interface IVideo extends React.HTMLAttributes<HTMLVideoElement> {
  src: string
}

export const Video = ({ src, ...props }: IVideo) => (
  <SVideo
    width={800}
    height={800}
    autoPlay
    playsInline
    controls
    muted
    loop
    {...props}
  >
    <source src={src} />
  </SVideo>
)

const SVideo = styled.video`
  max-width: 100% !important;
  height: auto;
`
