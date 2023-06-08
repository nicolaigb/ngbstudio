import React from 'react';
import { InternalLink, Text } from '@atoms';
import { Dates, Menu } from '@molecules';
import styled from 'styled-components';

export const Header = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div>
    <SBanner styleType="emphasized">
      GRAND OPENI––
    </SBanner>
    <SHeaderContainer {...props}>
      <SNavContainer>
        <InternalLink styleType="subdued" href="/">
          <STitle styleType="header">NG</STitle>
        </InternalLink>
        <Menu />
      </SNavContainer>
      <Dates />
    </SHeaderContainer>
  </div>
);

const SBanner = styled(Text)`
  color: #FF1010;
  background: repeating-linear-gradient(
    -45deg,
    #FFF,
    #FFF 40px,
    #F5F5F5 40px,
    #F5F5F5 80px
  );
  padding: 0 8px;
  text-align: center;
  letter-spacing: 8px;
`;

const SHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({ theme }) => theme.Spacing.regular};
  padding-left: ${({ theme }) => theme.Spacing.wide};
  backdrop-filter: blur(4px);

  // Stacked header on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    padding-left: ${({ theme }) => theme.Spacing.regular};
    gap: ${({ theme }) => theme.Spacing.regular};
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

const STitle = styled(Text)`
  line-height: 100%;
`;

const SNavContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
`;
