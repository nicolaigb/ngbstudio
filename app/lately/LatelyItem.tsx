import React from 'react'
import styled from 'styled-components'
import { Text, Image, ExternalLink } from '@atoms'
import { ILatelyItem } from 'model'
import { Embed } from '../../components/molecules/Embed'

export default function LatelyItem({
  type,
  embedType,
  src,
  alt,
  maxWidth: width,
  height,
  url,
  caption,
}: ILatelyItem) {
  const renderInspoItem = () => {
    switch (type) {
      case 'image': {
        const image = (
          <Image src={src} alt={alt ?? ''} width={width} height={height} />
        )
        return url ? <ExternalLink href={url}>{image}</ExternalLink> : image
      }
      case 'embed':
        return <Embed embedType={embedType ?? 'appleMusic'} src={src} />
      case 'text':
        return <Text styleType="title">{caption}</Text>
      default:
        return null
    }
  }

  return <SLatelyItemContainer>{renderInspoItem()}</SLatelyItemContainer>
}

const SLatelyItemContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    width: 100%;

    img,
    iframe {
      width: 100%;
    }

    img {
      height: auto;
    }
  }
`
