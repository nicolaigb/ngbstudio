import React from 'react'
import styled from 'styled-components'
import { Text, Image } from '@atoms'
import { Spacing } from 'styles/spacing'

export interface IContentPreview extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * URL to image to be displayed in content preview
   */
  src: string

  /**
   * Name of content
   */
  name: string
}

export const ContentPreview = ({ src, name, ...props }: IContentPreview) => (
  <SContentPreview {...props}>
    <SImage
      src={src}
      alt={`Thumbnail preview for ${name}`}
      fill
      sizes={`(max-width: ${Spacing.large}) 100vw, (max-width: ${Spacing.threeColumnMin}) 50vw, (max-width: ${Spacing.fourColumnMin}) 33vw`}
    />
    <SText styleType="title">{name}</SText>
  </SContentPreview>
)

const SContentPreview = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const SImage = styled(Image)`
  object-fit: cover;
`

const SText = styled(Text)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.Colors.inverse};

  @media (min-width: ${({ theme }) => theme.Spacing.medium}) {
    ${SContentPreview}:hover & {
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(8px) contrast(135%);
    }
  
    ${SContentPreview}:active & {
      backdrop-filter: blur(2px) contrast(135%);
      background-color: transparent;
      transition:
        backdrop-filter: 0ms;
        backdrop-filter 0ms;
    }
  
    transition:
      background-color 150ms ease-in-out,
      backdrop-filter 250ms;
  }
`
