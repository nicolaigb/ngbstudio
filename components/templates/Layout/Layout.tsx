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
  // Layout specific to desktop screen
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.twoColumnMin}) {
    grid-template-columns: 135px auto 135px;
    grid-template-rows: 40px auto ${({ theme }) => theme.Spacing.wide};
    row-gap: ${({ theme }) => theme.Spacing.extraWide};
  }
  background-color: ${({ theme }) => theme.Colors.background};
  padding: ${({ theme }) => theme.Spacing.wide};
`;

const SHeader = styled(Header)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1;
`;

const SMenu = styled(Menu)`
  grid-column: 1;
  grid-row: 2;
  max-width: 135px;
`;

const SContentContainer = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;
