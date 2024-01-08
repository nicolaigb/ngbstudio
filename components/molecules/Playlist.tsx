import React from 'react'
import styled, { css } from 'styled-components'
import { TEmbed } from 'model'

export interface IPlaylist extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string

  embedType: TEmbed
}

export const Playlist = ({ src, embedType, ...props }: IPlaylist) => {
  return (
    <SFrame
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
      embedType={embedType}
      {...props}
    />
  )
}

const appleMusicStyle = css`
  height: 450px;
  max-width: 660px;
  overflow: hidden;
  border-radius: 10px;
`

const youtubeStyle = css`
  width: 560px;
  height: 315px;
`

const SFrame = styled.iframe<Pick<IPlaylist, 'embedType'>>(
  ({ embedType }) => `
  border: none;

  ${embedType === 'appleMusic' && appleMusicStyle};
  ${embedType === 'youtube' && youtubeStyle}

  @media (max-width: ${({ theme }) => theme.Spacing.small}) {
    height: 450px;
  }
`,
)
