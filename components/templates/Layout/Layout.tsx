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
  grid-template-rows: ${({ theme }) => theme.Spacing.extraWide} auto ${({ theme }) => theme.Spacing.extraWide};
  grid-template-columns: 195px auto 195px;
  row-gap: ${({ theme }) => theme.Spacing.extraWide};
  background-color: ${({ theme }) => theme.Colors.background};
`;

const SHeader = styled(Header)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1;
  padding: ${({ theme }) => theme.Spacing.wide};
`;

const SMenu = styled(Menu)`
  grid-column: 1;
  grid-row: 2;
  margin-left: ${({ theme }) => theme.Spacing.wide};
`;

const SContentContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;
