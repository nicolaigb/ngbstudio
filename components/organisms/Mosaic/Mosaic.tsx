import React, { ReactElement } from 'react';
import { Image } from '@atoms';
import styled from 'styled-components';

export interface IMosaic extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Images to be displayed in Mosaic format
   */
  images: string[];
}

export const Mosaic: React.FC<IMosaic> = (
  {
    images,
    ...props
  },
): ReactElement => (
  <SMosaicContainer {...props}>
    {images.map((image, idx) => <SImage key={idx} src={image} />)}
  </SMosaicContainer>
);

const SMosaicContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SImage = styled(Image)`
  margin: 5px;
`;
