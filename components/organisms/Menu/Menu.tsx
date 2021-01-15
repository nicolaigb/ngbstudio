import {
  IInternalLink, InternalLink, HorizontalList, IHorizontalList,
} from '@atoms';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IMenu extends IHorizontalList {
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

const SMenuContainer = styled(HorizontalList)`
  justify-content: flex-start;
`;
