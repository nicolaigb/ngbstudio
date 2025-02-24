import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { ExternalLink, Video } from '@atoms'
import { Embed } from '@molecules/Embed'
import { Content } from '@/types/model'
import { getImageProps } from '@/sanity-studio/lib/image'

export interface ContentViewProps {
  content: Content
}

export const ContentView = ({ content, ...props }: ContentViewProps) => {
  const { type, alt, image, videoSrc, maxWidth, url, embedType } = content

  const imageProps = getImageProps({ image, alt })

  const renderContent = () => {
    switch (type) {
      case 'image':
        return imageProps ? <Image {...imageProps} /> : null
      case 'screenshot':
        return imageProps ? (
          <Image {...imageProps} className="rounded-lg shadow-lg" />
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
    <SContentView $maxWidth={maxWidth} {...props}>
      {url ? (
        <ExternalLink href={url}>{renderContent()}</ExternalLink>
      ) : (
        renderContent()
      )}
    </SContentView>
  )
}

type contentViewProps = {
  $maxWidth: number
}

const SContentView = styled.div<contentViewProps>(
  ({ $maxWidth }) => `
  flex-shrink: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    max-width: ${$maxWidth}px;
  }
`,
)
