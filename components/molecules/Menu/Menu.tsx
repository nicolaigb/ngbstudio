import {
  Text, InternalLink,
} from '@atoms';
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface IMenuItem {
  /**
   * Text to be displayed in menu item
   */
  text: string;

  /**
   * URL menu item is pointing to
   */
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
): ReactElement => {
  const router = useRouter();
  return (
    <SMenuContainer {...props}>
      {menuItems.map(
        (menuItem, idx) => (
          <SMenuItemContainer key={idx}>
            <InternalLink styleType="subdued" href={menuItem.href}>
              {(router.pathname === menuItem.href)
                ? <SSelectedText styleType="emphasized">{menuItem.text}</SSelectedText>
                : <Text styleType="emphasized">{menuItem.text}</Text>}
            </InternalLink>
          </SMenuItemContainer>
        ),
      )}
    </SMenuContainer>
  );
};

const SMenuContainer = styled.div`
  display: flex;
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const SMenuItemContainer = styled.div`
  // Add vertical spacing between items on web
  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    margin-bottom: ${({ theme }) => theme.Spacing.tight}
  }
`;

const SSelectedText = styled(Text)`
  color: ${({ theme }) => theme.Colors.emphasis};
`;
