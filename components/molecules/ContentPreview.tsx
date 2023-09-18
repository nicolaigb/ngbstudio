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
  <SContentPreviewContainer {...props}>
    <InternalLink href={url}>
      <SImage src={src} alt={`Thumbnail preview for ${name}`} fill loading="lazy" />
      <SText styleType="title">{name}</SText>
    </InternalLink>
  </SContentPreviewContainer>
);

const SContentPreviewContainer = styled.div`
  position: relative;

  a:focus-visible {
    outline: 2px solid -webkit-focus-ring-color;
    border-radius: 1px;
    display: block;
    width: 100%;
    height: 100%;
  }
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

  ${SContentPreviewContainer}:active & {
    backdrop-filter: blur(2px) contrast(135%);
    background-color: transparent;
    transition:
      backdrop-filter: 0ms;
      backdrop-filter 0ms;
  }

  transition:
    background-color 150ms ease-in-out,
    backdrop-filter 250ms;
`;
