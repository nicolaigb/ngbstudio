import React from 'react';
import styled from 'styled-components';

export const Grid = (
  {
    ...props
  }: React.HTMLAttributes<HTMLDivElement>,
) => (
  <SGridContainer {...props} />
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
