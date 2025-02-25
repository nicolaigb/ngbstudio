import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

import { Text, InternalLink } from '@atoms'
import navItems from '@constants/navItems'

export const Menu = () => {
  const pathname = usePathname()
  return (
    <SMenuContainer>
      {navItems.map((item, idx) => (
        <InternalLink href={item.href} key={idx}>
          <SNavItem
            className={clsx({ selected: item.href === pathname })}
            styleType="emphasized"
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

const SNavItem = styled(Text)`
  &:hover {
    text-decoration: underline;
  }
  &.selected {
    text-decoration: underline;
  }
`
