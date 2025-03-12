import { SanityImageSource, getImageDimensions } from '@sanity/asset-utils'
import createImageUrlBuilder from '@sanity/image-url'
import { ImageProps } from 'next/image'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => builder.image(source)

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
    const blurUrl =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8+h8AAu8B9totwrcAAAAASUVORK5CYII='

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
    return undefined
  }
}
