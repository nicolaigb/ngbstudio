import React, { ReactElement } from 'react';
import { Header, IHeader } from '@organisms';
import styled from 'styled-components';

export interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for header shown in layout
   */
  headerProps: IHeader,

  /**
   * Content of page
   */
  children: ReactElement,
}

export const Layout: React.FC<ILayout> = (
  {
    headerProps,
    children,
    ...props
  },
): ReactElement => (
  <SLayoutContainer {...props}>
    <Header {...headerProps} />
    <SContentContainer>{children}</SContentContainer>
  </SLayoutContainer>
);

const SLayoutContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: auto;
`;

const SContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
