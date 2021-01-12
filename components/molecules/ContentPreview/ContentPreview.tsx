import React, { ReactElement } from 'react';
import { Image } from '@atoms/Image';
import styled from 'styled-components';

export interface IContentPreview extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * URL to image to be displayed in content preview
   */
  src: string;

  /**
   * Name of content
   */
  name: string;
}

export const ContentPreview: React.FC<IContentPreview> = (
  {
    src,
    name,
    ...props
  },
): ReactElement => (
  <SContentPreviewContainer {...props} />
);

const SContentPreviewContainer = styled.div``;

const SImage = styled(Image)``;
