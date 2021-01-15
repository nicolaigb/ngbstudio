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
  grid-template-columns: 240px 240px 240px 240px;
  grid-template-rows: 120px 120px 120px 120px;
  column-gap: 30px;
  row-gap: 30px;
`;

const SContentPreview = styled(ContentPreview)``;
