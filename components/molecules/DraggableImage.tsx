import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import Image from 'next/image'
import { ContentData } from 'model'

export interface IDraggableImage {
  data: ContentData
}

export const DraggableImage = ({ data }: IDraggableImage) => {
  const { src, alt, width, height } = data
  return (
    <Draggable>
      <SImageContainer>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable="false"
        />
      </SImageContainer>
    </Draggable>
  )
}

const SImageContainer = styled.div`
  cursor: move;
`
