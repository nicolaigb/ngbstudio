import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface ILayout extends React.HTMLAttributes<HTMLDivElement> {}

export const Layout: React.FC<ILayout> = (
  {
    ...props
  },
): ReactElement => (
  <SLayoutContainer {...props} />
);

const SLayoutContainer = styled.div``;
