import React from 'react';
import { Image, Video } from '@atoms';
import { ContentData } from 'model';
import styled, { css } from 'styled-components';

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  data: ContentData;
}

export const ContentView = ({
  data,
}: IContentView) => {
  const { type } = data;

  switch (type) {
    case 'image':
      return <SImage imageObj={data} />;
    case 'video':
      return <SVideo videoObj={data} />;
    default:
      return null;
  }
};

const contentStyle = css`
  margin-bottom: 64px;
`;

const SImage = styled(Image)`
  ${contentStyle};
`;

const SVideo = styled(Video)`
  ${contentStyle};
`;
