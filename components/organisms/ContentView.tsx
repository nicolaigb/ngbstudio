'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { getImageProps } from '@/sanity-studio/lib/image'
import { Content } from '@/types/model'
import { ExternalLink, BodySmall, Video } from '@atoms'
import { Embed } from '@molecules/Embed'

export type ContentViewProps = {
  content: Content
  className?: string
}

export const ContentView = ({ content, className }: ContentViewProps) => {
  const { type, alt, image, videoSrc, maxWidth, url, embedType, caption } =
    content

  const imageProps = getImageProps({ image, alt })

  const renderContent = () => {
    switch (type) {
      case 'image':
        return imageProps ? (
          <Image {...imageProps} alt={alt} quality={100} />
        ) : null
      case 'screenshot':
        return imageProps ? (
          <Image
            {...imageProps}
            alt={alt}
            className="rounded-lg shadow-lg"
            quality={100}
          />
        ) : null
      case 'video':
        return <Video src={videoSrc ?? ''} />
      case 'embed':
        return <Embed embedType={embedType} src={url ?? ''} />
      default:
        return null
    }
  }

  return (
    <MaxWidthContainer className={className} $maxWidth={maxWidth}>
      {url ? (
        <ExternalLink href={url}>{renderContent()}</ExternalLink>
      ) : (
        renderContent()
      )}
      {caption && (
        <BodySmall className="max-w-full text-wrap" variant="bodySmall">
          {caption}
        </BodySmall>
      )}
    </MaxWidthContainer>
  )
}

type MaxWidthContainerProps = {
  $maxWidth: number
}

const MaxWidthContainer = styled.div<MaxWidthContainerProps>(
  ({ $maxWidth }) => `
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    max-width: ${$maxWidth}px;
  }
`,
)
