import {
  IInternalLink, InternalLink, VerticalList, IVerticalList,
} from '@atoms';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IMenu extends IVerticalList {
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

const SMenuContainer = styled(VerticalList)`
  justify-content: flex-start;
`;
