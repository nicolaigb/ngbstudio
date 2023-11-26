import React from 'react'
import styled from 'styled-components'
import { ContentData } from 'model'

export interface IVideo {
  videoObj: ContentData
}

export const Video = ({ videoObj }: IVideo) => {
  const { src, width, height } = videoObj
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
