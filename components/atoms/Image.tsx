import React from 'react'
import styled from 'styled-components'
import NextImage from 'next/image'
import { ContentData } from 'model'

export interface IImage {
  className?: string
  imageObj: ContentData
}

export const Image = ({ className, imageObj }: IImage) => {
  const { src, alt, width, height } = imageObj
  return (
    <SImage
      src={src}
      alt={alt ?? ''}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mP8+p8BDBhxMwCkegfV2VbptgAAAABJRU5ErkJggg=="
      loading="lazy"
      className={className}
    />
  )
}

const SImage = styled(NextImage)`
  max-width: 100% !important;
  height: auto;
`
