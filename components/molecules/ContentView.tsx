import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ContentData } from 'model';

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  data: ContentData;
}

export const ContentView = ({
  data,
}: IContentView) => {
  switch (data.type) {
    case 'image':
      return (
        <SImageContainer>
          <Image src={data.src} layout="fill" objectFit="contain" />
        </SImageContainer>
      );
    case 'video':
      return (
        <SVideoContainer autoPlay loop>
          <source src={data.src} />
        </SVideoContainer>
      );
    default:
      return <div />;
  }
};

const SImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const SVideoContainer = styled.video`
  width: 100%;
  height: 600px;
`;
