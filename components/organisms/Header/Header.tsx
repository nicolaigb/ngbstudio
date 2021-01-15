import React, { ReactElement } from 'react';
import { Text, IText } from '@atoms';
import { Menu, IMenu } from '@molecules';
import { Dates, IDates } from '@organisms/Dates';
import styled from 'styled-components';

export interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for the dates component nested in the header
   */
  datesProps: IDates;

  /**
   * Props for the menu in the header
   */
  menuProps: IMenu;

  /**
   * Props for the text in the header
   */
  textProps: IText;
}

export const Header: React.FC<IHeader> = (
  {
    datesProps,
    menuProps,
    textProps,
    ...props
  },
): ReactElement => (
  <SHeaderContainer {...props}>
    <SLeftContainer>
      <STitle {...textProps} />
      <Menu {...menuProps} />
    </SLeftContainer>
    <Dates {...datesProps} />
  </SHeaderContainer>
);

const SHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

const SLeftContainer = styled.div``;

const STitle = styled(Text)`
  color: ${({ theme }) => theme.Colors.text};
`;
