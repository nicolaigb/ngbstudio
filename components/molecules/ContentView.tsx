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
        <SImage
          src={data.src}
          alt={data.alt}
          width={data.width}
          height={data.height}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mP8+p8BDBhxMwCkegfV2VbptgAAAABJRU5ErkJggg=="
        />
      );
    case 'video':
      return (
        <SVideoContainer
          width={data.width}
          height={data.height}
          autoPlay
          playsInline
          controls
          muted
          loop
        >
          <source src={data.src} />
        </SVideoContainer>
      );
    default:
      return <div />;
  }
};

const SImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

const SVideoContainer = styled.video`
  max-width: 100%;
  height: auto;
`;
