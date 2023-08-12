import React, { ReactElement } from 'react';
import { ContentPreview, IContentPreview } from '@molecules';
import styled from 'styled-components';

export interface IGrid extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props corresponding to each work featured in the grid
   */
  worksProps: IContentPreview[];
}

export const Grid: React.FC<IGrid> = (
  {
    worksProps,
    ...props
  },
): ReactElement => (
  <SGridContainer {...props}>
    {worksProps.map((contentPreviewProps, idx) => (
      <SContentPreviewContainer key={idx}>
        <SContentPreview {...contentPreviewProps} />
      </SContentPreviewContainer>
    ))}
  </SGridContainer>
);

const SGridContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  // Media queries to determine number of columns based on screen size
  @media (max-width: ${({ theme }) => theme.Spacing.large}) { // Mobile
    grid-template-columns: 100%;
  }
  @media (min-width: ${({ theme }) => theme.Spacing.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.Spacing.threeColumnMin}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.Spacing.fourColumnMin}) {
    grid-template-columns: repeat(4, 1fr);
  }
  column-gap: ${({ theme }) => theme.Spacing.wide};
  row-gap: ${({ theme }) => theme.Spacing.wide};
`;

const SContentPreviewContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;
`;

const SContentPreview = styled(ContentPreview)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
