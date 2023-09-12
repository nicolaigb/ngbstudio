import React from 'react';
import { InternalLink, Text } from '@atoms';
import { Dates, Menu } from '@molecules';
import styled from 'styled-components';

export const Header = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SContainer {...props}>
    <SHeaderContainer {...props}>
      <SNavContainer>
        <InternalLink href="/">
          <STitle styleType="header">NG</STitle>
        </InternalLink>
        <Menu />
      </SNavContainer>
      <Dates />
    </SHeaderContainer>
  </SContainer>
);

const SContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;

const SHeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({ theme }) => theme.Spacing.regular};
  padding-left: ${({ theme }) => theme.Spacing.wide};

  // Stacked header on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.medium}) {
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

// EXPERIMENTATION
// const SBanner = styled.div`
//   position: relative;
//   color: #FFFFFF;
//   height: 16px;
//   text-align: center;
//   letter-spacing: 24px;
//   overflow: hidden;
//   background-image: url(/clouds-banner.png);
// `;
