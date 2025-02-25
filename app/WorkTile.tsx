import Image from 'next/image'
import Link from 'next/link'
import React, { RefObject } from 'react'

import { Text } from '@/components/atoms'
import { getImageProps } from '@/sanity-studio/lib/image'
import { Work } from '@/types/model'

type WorkTileProps = {
  work: Work
  ref: RefObject<HTMLDivElement | null>
} & React.HTMLAttributes<HTMLDivElement>

export default function WorkTile({ work, ref, ...props }: WorkTileProps) {
  const { slug, title, thumbnail } = work

  const imageProps = getImageProps({
    image: thumbnail,
    alt: `Thumbnail for ${title} tile`,
  })

  return (
    <div
      className="group relative aspect-tile overflow-hidden"
      ref={ref}
      {...props}
    >
      <Link href={`/work/${slug}`}>
        {imageProps && (
          <Image className="h-full w-full object-cover" {...imageProps} />
        )}
        <Text
          styleType="title"
          className="absolute left-0 top-0 z-10 h-full w-full opacity-0 transition-all duration-200 ease-in-out group-hover:bg-white/75 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:backdrop-contrast-150"
        >
          {title}
        </Text>
      </Link>
    </div>
  )
}
