import React from 'react';
import styled from 'styled-components';
import { Header } from '@organisms';

export const Layout = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SLayoutContainer {...props}>
    <SHeader />
    <SContentContainer>{children}</SContentContainer>
  </SLayoutContainer>
);

const SLayoutContainer = styled.div`
  position: relative;
`;

const SHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const SContentContainer = styled.div`
  padding: ${({ theme }) => theme.Spacing.wide};
  overflow: hidden;
  overscroll-behavior-y: none;
  // Layout specific to mobile screen
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.large}) {
    padding: ${({ theme }) => theme.Spacing.regular};
  }
`;
