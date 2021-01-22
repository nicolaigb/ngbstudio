import React, { ReactElement } from 'react';
import { ContentPreview, IContentPreview } from '@molecules';
import styled from 'styled-components';

export interface IWorksGrid extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props corresponding to each work featured in the grid
   */
  worksProps: IContentPreview[];
}

export const WorksGrid: React.FC<IWorksGrid> = (
  {
    worksProps,
    ...props
  },
): ReactElement => (
  <SWorksGridContainer {...props}>
    {worksProps.map(
      (contentPreviewProps, idx) => (
        <SContentPreviewContainer key={idx}>
          <SContentPreview {...contentPreviewProps} />
        </SContentPreviewContainer>
      ),
    )}
  </SWorksGridContainer>
);

const SWorksGridContainer = styled.div`
  flex: 1 0;
  display: grid;
  justify-content: center;
  overflow-y: scroll;
  @media (max-width: ${({ theme }) => theme.Spacing.twoColumnMin}) {
    grid-template-columns: 80vw;
  }
  @media (min-width: ${({ theme }) => theme.Spacing.twoColumnMin}) {
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: ${({ theme }) => theme.Spacing.threeColumnMin}) {
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: ${({ theme }) => theme.Spacing.fourColumnMin}) {
    grid-template-columns: repeat(4, auto);
  }
  column-gap: ${({ theme }) => theme.Spacing.wide};
  row-gap: ${({ theme }) => theme.Spacing.wide};
`;

const SContentPreviewContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.Spacing.twoColumnMin}) {
    width: ${({ theme }) => theme.Spacing.cellWidth};
  }
  // If this is on a screen smaller than minimum width for two columns, display with full width
  @media screen and (max-width: ${({ theme }) => theme.Spacing.twoColumnMin}) {
    width: 100%;
  }
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
