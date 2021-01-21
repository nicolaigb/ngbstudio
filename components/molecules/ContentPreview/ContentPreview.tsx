import React, { ReactElement } from 'react';
import { Text, Image } from '@atoms';
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
  <SContentPreviewContainer {...props}>
    <SImage src={src} />
    <SText styleType="title">{name}</SText>
  </SContentPreviewContainer>
);

const SContentPreviewContainer = styled.div`
  width: 240px;
  height: 120px;
  position: relative;
`;

const SImage = styled(Image)`
  width: 100%;
  height: 100%;

  ${SContentPreviewContainer}:hover & {
    opacity: 85%;
  }
`;

const SText = styled(Text)`
  visibility: hidden;
  position: absolute;
  
  top: 0;
  left: 0;
  
  // Centering small text
  
  /* top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%); */

  ${SContentPreviewContainer}:hover & {
    visibility: visible;
  }
`;

// Centering Small Text
