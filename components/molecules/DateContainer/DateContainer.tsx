import React, { ReactElement } from 'react';
import {
  Date, IDate, Text,
} from '@atoms';
import styled from 'styled-components';

export interface IDateContainer extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for the wrapped date component
   */
  dateProps: IDate;

  /**
   * Text to be displayed along with date
   */
  text: string;

}

export const DateContainer: React.FC<IDateContainer> = (
  {
    dateProps,
    text,
    ...props
  },
): ReactElement => (
  <SDateContainer {...props}>
    <Text styleType="emphasized">{text}</Text>
    <Date {...dateProps} />
  </SDateContainer>
);

const SDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
