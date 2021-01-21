import React, { ReactElement } from 'react';
import { Text, IText } from '@atoms';
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
  textProps: IText;
}

export const Header: React.FC<IHeader> = (
  {
    datesProps,
    textProps,
    ...props
  },
): ReactElement => (
  <SHeaderContainer {...props}>
    <STitle styleType="header" {...textProps} />
    <SDates {...datesProps} />
  </SHeaderContainer>
);

const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
`;

const STitle = styled(Text)`
  color: ${({ theme }) => theme.Colors.text};
`;

const SDates = styled(Dates)`
  min-width: 420px;
`;
