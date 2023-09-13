import React from 'react';
import styled, { css } from 'styled-components';
import NextImage from 'next/image';
import { ContentData } from 'model';

export interface IImage {
  imageObj: ContentData;
}

export const Image = ({
  imageObj,
}: IImage) => {
  const {
    src, alt, width, height, isScreenshot,
  } = imageObj;
  return (
    <SImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAQAAAAD+Fb1AAAAEElEQVR42mP8+p8BDBhxMwCkegfV2VbptgAAAABJRU5ErkJggg=="
      isScreenshot={isScreenshot}
    />
  );
};

const screenshotStyle = css`
  border-radius: 8px;
  box-shadow: 0px 4px 32px 0px rgba(0, 2, 32, 0.16);
  overflow: hidden;
  max-height: 90vh;
  width: auto;
`;

const SImage = styled(NextImage)<Pick<ContentData, 'isScreenshot'>>`
  ${({ isScreenshot: showBorder }) => showBorder && screenshotStyle};
`;
