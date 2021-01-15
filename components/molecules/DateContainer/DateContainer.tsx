import React, { ReactElement } from 'react';
import {
  Date, Text,
} from '@atoms';
import styled from 'styled-components';

export interface IDateContainer extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for the wrapped date component
   */
  timezone: string;

  /**
   * Text to be displayed along with date
   */
  text: string;

}

export const DateContainer: React.FC<IDateContainer> = (
  {
    timezone,
    text,
    ...props
  },
): ReactElement => (
  <SDateContainer {...props}>
    <SText styleType="emphasized">{text}</SText>
    <SDate timezone={timezone} />
  </SDateContainer>
);

const SDateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SText = styled(Text)`
  color: ${({ theme }) => theme.Colors.text};
`;

const SDate = styled(Date)`
  margin-left: 5px;
  color: ${({ theme }) => theme.Colors.text};
`;
