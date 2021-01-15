import { HorizontalList, IHorizontalList } from '@atoms';
import { DateContainer, IDateContainer } from '@molecules/DateContainer';
import React, { ReactElement } from 'react';
import { MdLanguage } from 'react-icons/md';
import styled from 'styled-components';

export interface IDates extends IHorizontalList {
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
  <SDatesContainer>
    <SGlobe />
    <SHorizontalList {...props}>
      {dateProps.map((itemProps, idx) => <DateContainer key={idx} {...itemProps} />)}
    </SHorizontalList>
  </SDatesContainer>
);

const SDatesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SHorizontalList = styled(HorizontalList)`
  flex-grow: 1;
  margin-left: 10px;
`;

const SGlobe = styled(MdLanguage).attrs(() => ({
  size: 20,
}))`
  color: ${({ theme }) => theme.Colors.text};
`;
