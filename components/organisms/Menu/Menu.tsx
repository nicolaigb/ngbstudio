import {
  IInternalLink, InternalLink,
} from '@atoms';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IMenu extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * List of items to be displayed in the menu
   */
  menuItemProps: IInternalLink[],
}

export const Menu: React.FC<IMenu> = (
  {
    menuItemProps,
    ...props
  },
): ReactElement => (
  <SMenuContainer {...props}>
    {menuItemProps.map(
      (internalLinkProps, idx) => <InternalLink key={idx} {...internalLinkProps} />,
    )}
  </SMenuContainer>
);

const SMenuContainer = styled.div``;
