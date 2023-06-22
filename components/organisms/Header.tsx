import React from 'react';
import { InternalLink, Text } from '@atoms';
import { Dates, Menu } from '@molecules';
import styled from 'styled-components';

export const Header = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SContainer {...props}>
    <SBanner styleType="emphasized">
      IT&apos;SMYMFBDAY
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
  </SContainer>
);

const SContainer = styled.div`
  backdrop-filter: blur(4px);
`;

const SBanner = styled(Text)`
  color: #FF1010;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 40px,
    #EEEEEE90 40px,
    #EEEEEE90 80px
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
