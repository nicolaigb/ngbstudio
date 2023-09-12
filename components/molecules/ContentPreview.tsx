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
  <InternalLink href={url}>
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
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.Colors.inverse};

  ${SContentPreviewContainer}:hover & {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(8px) contrast(135%);
  }

  transition:
    background-color 150ms ease-in-out,
    backdrop-filter 250ms;
`;
