import React from 'react'
import NextImage, { ImageProps } from 'next/image'

export const Image = ({ ...props }: ImageProps) => {
  return (
    <NextImage
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mP8+p8BDBhxMwCkegfV2VbptgAAAABJRU5ErkJggg=="
      loading="lazy"
      {...props}
    />
  )
}
