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
  grid-template-columns: 20%;
  grid-template-rows: 30%;
`;

const SContentPreview = styled(ContentPreview)`
  margin: 10px;
`;
