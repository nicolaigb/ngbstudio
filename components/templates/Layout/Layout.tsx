import React, { ReactElement } from 'react';
import { Menu, IMenu } from '@molecules';
import { Header, IHeader } from '@organisms';
import styled from 'styled-components';

export interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for header shown in layout
   */
  headerProps: IHeader,

  /**
   * Props for the menu shown alongside the content
   */
  menuProps: IMenu,

  /**
   * Content of page
   */
  children: ReactElement,
}

export const Layout: React.FC<ILayout> = (
  {
    headerProps,
    menuProps,
    children,
    ...props
  },
): ReactElement => (
  <SLayoutContainer {...props}>
    <SHeader {...headerProps} />
    <SMenu {...menuProps} />
    <SContentContainer>{children}</SContentContainer>
  </SLayoutContainer>
);

const SLayoutContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: ${({ theme }) => theme.Spacing.wide} 36px auto ${({ theme }) => theme.Spacing.wide};
  grid-template-columns: ${({ theme }) => theme.Spacing.wide} 135px auto ${({ theme }) => theme.Spacing.wide};
  /* row-gap: ${({ theme }) => theme.Spacing.extraWide}; */
  background-color: ${({ theme }) => theme.Colors.background};
`;

const SHeader = styled(Header)`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row: 2;
  /* padding: ${({ theme }) => theme.Spacing.wide}; */
`;

const SMenu = styled(Menu)`
  grid-column: 2;
  grid-row: 3;
  margin-top: ${({ theme }) => theme.Spacing.extraWide};
`;

const SContentContainer = styled.div`
  margin-top: ${({ theme }) => theme.Spacing.extraWide};
  grid-column: 3;
  grid-row: 3;
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;
