import React from 'react';
import { InspoItem } from 'model';
import styled from 'styled-components';

export interface IPlaylist {
  playlistObj: InspoItem
}

export const Playlist = ({
  playlistObj,
  ...props
}: IPlaylist) => {
  const { src } = playlistObj;
  return (
    <SFrame allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={src} {...props} />
  );
};

const SFrame = styled.iframe`
  height: 300px;
  width: 100%;
  max-width: 660px;
  overflow: hidden;
  border-radius: 10px;
  border: none;
`;
