import React from 'react';
import { InternalLink, Text } from '@atoms';
import { Dates } from '@organisms/Dates';
import styled from 'styled-components';

export const Header = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SHeaderContainer {...props}>
    <SDates />
    <InternalLink styleType="subdued" href="/">
      <STitle styleType="header">NG</STitle>
    </InternalLink>
  </SHeaderContainer>
);

const SHeaderContainer = styled.div`
  display: flex;
  // Stacked header on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    flex-direction: column;
    justify-content: flex-start;
  }
  // Lengthwise row on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  align-items: flex-start;
`;

const STitle = styled(Text)`
  color: ${({ theme }) => theme.Colors.text};
  // Add vertical spacing on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    margin-top: ${({ theme }) => theme.Spacing.tight};
  }
`;

const SDates = styled(Dates)`
  // Fill entire container on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    width: 100%;
  }

  // Keep restrained to pre-defined height on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    width: 375px;
  }
`;
