import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { getImageProps } from '@/sanity-studio/lib/image'
import { Content } from '@/types/model'
import { ExternalLink, Video } from '@atoms'
import { Embed } from '@molecules/Embed'

export type ContentViewProps = {
  content: Content
}

export const ContentView = ({ content }: ContentViewProps) => {
  const { type, alt, image, videoSrc, maxWidth, url, embedType } = content

  const imageProps = getImageProps({ image, alt })

  const renderContent = () => {
    switch (type) {
      case 'image':
        return imageProps ? <Image {...imageProps} width={maxWidth} /> : null
      case 'screenshot':
        return imageProps ? (
          <Image
            {...imageProps}
            className="rounded-lg shadow-lg"
            width={maxWidth}
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
    <div>
      {url ? (
        <ExternalLink href={url}>{renderContent()}</ExternalLink>
      ) : (
        renderContent()
      )}
    </div>
  )
}

type ContentViewContainerProps = {
  $maxWidth: number
}

const SContentViewContainer = styled.div<ContentViewContainerProps>(
  ({ $maxWidth }) => `
  flex-shrink: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    max-width: ${$maxWidth}px;
  }
`,
)
