import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IWorksGrid, WorksGrid } from '@organisms';

export interface IHome extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for the grid of works featured on the home page.
   */
  worksGridProps: IWorksGrid;
}

export const Home: React.FC<IHome> = (
  {
    worksGridProps,
    ...props
  },
): ReactElement => (
  <SHomeContainer {...props}>
    <WorksGrid {...worksGridProps} />
  </SHomeContainer>
);

const SHomeContainer = styled.div``;
