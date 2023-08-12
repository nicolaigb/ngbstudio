import React from 'react';
import { Date } from '@atoms';
import { MdLanguage } from 'react-icons/md';
import styled from 'styled-components';
import dates from '../../constants/dates';

export const Dates = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SDatesContainer {...props}>
    <SGlobe />
    {dates.map((date, idx) => (
      <Date key={idx} {...date} />
    ))}
  </SDatesContainer>
);

const SDatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.Spacing.tight};

  @media only screen and (max-width: ${({ theme }) => theme.Spacing.small}) {
    width: 100%;
    justify-content: space-between;
  }
`;

const SGlobe = styled(MdLanguage).attrs(() => ({
  size: 20,
}))`
  color: ${({ theme }) => theme.Colors.text};
`;
