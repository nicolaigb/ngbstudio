import {
  Text, InternalLink,
} from '@atoms';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IMenuItem {
  /**
   * Text to be displayed in menu item
   */
  text: string;

  href: string;
}

export interface IMenu extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * List of items to be displayed in the menu
   */
  menuItems: IMenuItem[],
}

export const Menu: React.FC<IMenu> = (
  {
    menuItems,
    ...props
  },
): ReactElement => (
  <SMenuContainer {...props}>
    {menuItems.map(
      (menuItem, idx) => (
        <SMenuItemContainer key={idx}>
          <InternalLink styleType="subdued" href={menuItem.href}>
            <Text styleType="emphasized">{menuItem.text}</Text>
          </InternalLink>
        </SMenuItemContainer>
      ),
    )}
  </SMenuContainer>
);

const SMenuContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
  }

  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const SMenuItemContainer = styled.div`
  // Add horizontal spacing between items on mobile
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    margin-right: ${({ theme }) => theme.Spacing.wide};
  }

  // Add vertical spacing between items on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    margin-bottom: ${({ theme }) => theme.Spacing.tight}
  }
`;
