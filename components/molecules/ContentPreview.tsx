import React, { ReactElement } from 'react';
import Image from 'next/image';
import {
  Text,
  InternalLink,
} from '@atoms';
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

  /**
   * URL pointing to work this thumbnail previews
   */
  url: string;
}

export const ContentPreview: React.FC<IContentPreview> = (
  {
    src,
    name,
    url,
    ...props
  },
): ReactElement => (
  <InternalLink styleType="subdued" href={url}>
    <SContentPreviewContainer {...props}>
      <SImage src={src} alt={`Thumbnail preview for ${name}`} fill />
      <SText styleType="title">{name}</SText>
    </SContentPreviewContainer>
  </InternalLink>
);

const SContentPreviewContainer = styled.div`
  position: relative;
`;

const SImage = styled(Image)`
  object-fit: cover;
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
