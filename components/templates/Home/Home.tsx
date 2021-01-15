import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IWorksGrid, WorksGrid } from '@organisms';

export interface IHomePage extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for the grid of works featured on the home page.
   */
  worksGridProps: IWorksGrid;
}

export const HomePage: React.FC<IHomePage> = (
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
