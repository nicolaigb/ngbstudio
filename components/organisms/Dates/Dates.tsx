import { HorizontalList } from '@atoms';
import { DateContainer, IDateContainer } from '@molecules/DateContainer';
import React, { ReactElement } from 'react';
import { MdLanguage } from 'react-icons/md';
import styled from 'styled-components';

export interface IDates extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for each Date component included in dates
   */
  dateProps: IDateContainer[],
}
export const Dates: React.FC<IDates> = (
  {
    dateProps,
    ...props
  },
): ReactElement => (
  <SDatesContainer {...props}>
    <SGlobe />
    <SHorizontalList>
      {dateProps.map((itemProps, idx) => <DateContainer key={idx} {...itemProps} />)}
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
