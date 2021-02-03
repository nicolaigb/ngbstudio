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

  color: ${({ theme }) => theme.Colors.inverse};

  ${SContentPreviewContainer}:hover & {
    visibility: visible;
  }
`;
