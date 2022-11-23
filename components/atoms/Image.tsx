import React, { ReactElement } from 'react';
import styled from 'styled-components';
import NextImage from 'next/image';

export interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<IImage> = (
  {
    ...props
  },
): ReactElement => (
  <SImage layout="fill" {...props} />
);

const SImage = styled(NextImage)`
  object-fit: cover;
  width: 100%;
`;
