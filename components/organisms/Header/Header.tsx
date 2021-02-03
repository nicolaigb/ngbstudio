import React, { ReactElement } from 'react';
import { InternalLink, Text } from '@atoms';
import { Dates, IDates } from '@organisms/Dates';
import styled from 'styled-components';

export interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for the dates component nested in the header
   */
  datesProps: IDates;

  /**
   * Props for the text in the header
   */
  headerText: string;

  /**
   * URL that clicking on header title points to
   */
  headerURL: string;
}

export const Header: React.FC<IHeader> = (
  {
    datesProps,
    headerText,
    headerURL,
    ...props
  },
): ReactElement => (
  <SHeaderContainer {...props}>
    <SDates {...datesProps} />
    <InternalLink styleType="subdued" href={headerURL}>
      <STitle styleType="header">{headerText}</STitle>
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
