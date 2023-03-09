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
      <Image src={src} layout="fill" objectFit="cover" />
      <SText styleType="title">{name}</SText>
    </SContentPreviewContainer>
  </InternalLink>
);

const SContentPreviewContainer = styled.div`
  position: relative;
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
