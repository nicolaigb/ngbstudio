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
      (internalLinkProps, idx) => (
        <SMenuItemContainer>
          <InternalLink key={idx} {...internalLinkProps} />
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
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.mobileMax}) {
    margin-right: ${({ theme }) => theme.Spacing.wide};
  }

  @media only screen and (min-width: ${({ theme }) => theme.Spacing.webMin}) {
    margin-bottom: ${({ theme }) => theme.Spacing.regular}
  }
`;
