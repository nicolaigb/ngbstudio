import React from 'react'
import styled from 'styled-components'
import { Content } from 'model'

export interface IVideo {
  videoObj: Content
}

export const Video = ({ videoObj }: IVideo) => {
  const { src, maxWidth: width, height } = videoObj
  return (
    <SVideo
      width={width}
      height={height}
      autoPlay
      playsInline
      controls
      muted
      loop
    >
      <source src={src} />
    </SVideo>
  )
}

const SVideo = styled.video`
  max-width: 100% !important;
  height: auto;
`
