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
  <HorizontalList {...props}>
    <SGlobe />
    {dateProps.map((itemProps) => <DateContainer {...itemProps} />)}
  </HorizontalList>
);

const SGlobe = styled(MdLanguage).attrs(() => ({
  size: 20,
}))``;
