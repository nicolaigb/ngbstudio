import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { ContentData } from 'model';

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  data: ContentData;
}

export const ContentView = ({
  data,
}: IContentView) => {
  const {
    type, src, alt, width, height, isScreenshot: showBorder,
  } = data;
  return type === 'image' ? (
    <SImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mP8+p8BDBhxMwCkegfV2VbptgAAAABJRU5ErkJggg=="
      isScreenshot={showBorder}
    />
  ) : (
    <SVideoContainer
      width={width}
      height={height}
      autoPlay
      playsInline
      controls
      muted
      loop
    >
      <source src={src} />
    </SVideoContainer>
  );
};

const screenshotStyle = css`
  border-radius: 8px;
  box-shadow: 0px 4px 32px 0px rgba(0, 2, 32, 0.16);
  overflow: hidden;
  max-height: 90vh;
  width: auto;
`;

const contentStyle = css`
  max-width: 100% !important;
  height: auto;
`;

const SImage = styled(Image)<Pick<ContentData, 'isScreenshot'>>`
  ${({ isScreenshot: showBorder }) => showBorder && screenshotStyle};
  ${contentStyle};
`;

const SVideoContainer = styled.video`
  ${contentStyle};
`;
