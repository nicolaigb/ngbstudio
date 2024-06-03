import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Content } from 'model'
import { client } from '@sanity/lib/client'
import {
  UseNextSanityImageBuilder,
  useNextSanityImage,
} from 'next-sanity-image'
import { ExternalLink, Image, Video } from '@atoms'
import { Embed } from '@molecules/Embed'

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  contentObj: Content
}

export const ContentView = ({ contentObj, ...props }: IContentView) => {
  const { type, image, videoSrc, maxWidth, url, embedType } = contentObj

  const imageBuilder: UseNextSanityImageBuilder = useMemo(
    () => (imageURLBuilder, options) => {
      return imageURLBuilder
        .width(options.originalImageDimensions.width)
        .height(options.originalImageDimensions.height)
        .fit('fill')
    },
    [maxWidth],
  )

  const imageProps: any = useNextSanityImage(client, image, { imageBuilder })

  const renderContent = () => {
    switch (type) {
      case 'image':
        return <Image {...imageProps} />
      case 'screenshot':
        return <Image {...imageProps} className="rounded-lg shadow-lg" />
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
