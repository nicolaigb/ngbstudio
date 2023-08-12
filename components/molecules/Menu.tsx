import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import classnames from 'classnames';
import {
  Text,
  InternalLink,
} from '@atoms';
import navItems from '@constants/navItems';

export const Menu = () => {
  const router = useRouter();
  return (
    <SMenuContainer>
      {
        navItems.map((item, idx) => (
          <InternalLink href={item.href} key={idx}>
            <SNavItem
              className={classnames({ selected: item.href === router.pathname })}
              styleType="emphasized"
            >
              {item.name}
            </SNavItem>
          </InternalLink>
        ))
      }
    </SMenuContainer>
  );
};

const SMenuContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.Spacing.regular};
`;

const SNavItem = styled(Text)`
  &:hover {
    text-decoration: underline;
  }
  &.selected {
    text-decoration: underline;
  }
`;
