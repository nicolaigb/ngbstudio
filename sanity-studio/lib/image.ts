import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource, getImageDimensions } from '@sanity/asset-utils'

import { dataset, projectId } from '../env'
import { ImageProps } from 'next/image'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export const getImageProps = ({
  image,
  alt,
}: {
  image?: SanityImageSource
  alt: string
}): ImageProps | undefined => {
  if (!image) return undefined

  try {
    const imageUrl = urlFor(image)
    if (!imageUrl) {
      return undefined
    }

    const dimensions = getImageDimensions(image)
    const blurUrl = imageUrl.width(24).height(24).blur(10).url()

    return {
      src: imageUrl.url() ?? '',
      alt,
      width: dimensions.width,
      height: dimensions.height,
      placeholder: 'blur',
      blurDataURL: blurUrl,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw',
    }
  } catch (error) {
    console.error('Error generating image props:', error)
    return undefined
  }
}
