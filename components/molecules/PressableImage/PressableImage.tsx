import React, { ReactElement } from 'react';
import { Image, Button, IButton } from '@atoms';
import styled from 'styled-components';

export interface IPressableImage extends IButton {
  /**
   * URL for image to be displayed
   */
  imageURL: string;
}

export const PressableImage: React.FC<IPressableImage> = (
  {
    imageURL,
    ...props
  },
): ReactElement => (
  <SButton {...props} styleType="image">
    <Image src={imageURL} />
  </SButton>
);

const SButton = styled(Button)``;
