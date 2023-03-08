import React from 'react';
import { Header } from '@organisms';
import styled from 'styled-components';

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
  // Layout specific to mobile screen
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.webMin}) {
    padding: ${({ theme }) => theme.Spacing.regular};
  }
`;
