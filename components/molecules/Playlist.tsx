import React from 'react'
import styled from 'styled-components'

export interface IPlaylist {
  src: string
}

export const Playlist = ({ src, ...props }: IPlaylist) => (
  <SFrame
    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    src={src}
    {...props}
  />
)

const SFrame = styled.iframe`
  height: 450px;
  max-width: 660px;
  overflow: hidden;
  border-radius: 10px;
  border: none;

  @media (max-width: ${({ theme }) => theme.Spacing.small}) {
    height: 450px;
  }
`
