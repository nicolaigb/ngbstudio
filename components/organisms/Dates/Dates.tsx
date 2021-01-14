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
    {dateProps.map((itemProps) => <DateContainer {...itemProps} />)}
  </SDatesContainer>
);

const SDatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SGlobe = styled(MdLanguage).attrs(() => ({
  size: 20,
}))``;
