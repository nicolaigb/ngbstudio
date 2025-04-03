import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

import { Body, InternalLink } from '@atoms'
import navItems from '@constants/navItems'

export const Menu = () => {
  const pathname = usePathname()
  return (
    <SMenuContainer>
      {navItems.map((item, idx) => (
        <InternalLink href={item.href} key={idx}>
          <SNavItem
            className={clsx({ selected: item.href === pathname })}
            isPlus
          >
            {item.name}
          </SNavItem>
        </InternalLink>
      ))}
    </SMenuContainer>
  )
}

const SMenuContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.Spacing.regular};
`

const SNavItem = styled(Body)`
  &:hover {
    text-decoration: underline;
  }
  &.selected {
    text-decoration: underline;
  }
`
