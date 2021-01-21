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
      (contentPreviewProps, idx) => <SContentPreview key={idx} {...contentPreviewProps} />,
    )}
  </SWorksGridContainer>
);

const SWorksGridContainer = styled.div`
  flex: 1 0;
  display: grid;
  justify-content: center;
  overflow-y: scroll;
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, auto);
  }
  column-gap: ${({ theme }) => theme.Spacing.wide};
  row-gap: ${({ theme }) => theme.Spacing.wide};
`;

const SContentPreview = styled(ContentPreview)``;
