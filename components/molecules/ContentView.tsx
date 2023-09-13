import React from 'react';
import styled, { css } from 'styled-components';
import { Image, Video } from '@atoms';
import { ContentData } from 'model';

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  data: ContentData;
}

export const ContentView = ({
  data,
}: IContentView) => {
  const { type } = data;
  return (type === 'image' ? (
    <SImage
      imageObj={data}
    />
  ) : (
    <SVideo
      videoObj={data}
    />
  ));
};

const contentStyle = css`
  max-width: 100% !important;
  height: auto;
`;

const SImage = styled(Image)`
  ${contentStyle};
`;

const SVideo = styled(Video)`
  ${contentStyle};
`;
