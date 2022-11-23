import React from 'react';
import { HorizontalList } from '@atoms';
import { DateContainer } from '@molecules/DateContainer';
import { MdLanguage } from 'react-icons/md';
import styled from 'styled-components';
import dates from '@constants/dates';

export const Dates = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SDatesContainer {...props}>
    <SGlobe />
    <SHorizontalList>
      {dates.map((date, idx) => <DateContainer key={idx} {...date} />)}
    </SHorizontalList>
  </SDatesContainer>
);

const SDatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SHorizontalList = styled(HorizontalList)`
  flex-grow: 1;
  margin-left: ${({ theme }) => theme.Spacing.tight};
`;

const SGlobe = styled(MdLanguage).attrs(() => ({
  size: 20,
}))`
  color: ${({ theme }) => theme.Colors.text};
`;
