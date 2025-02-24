'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import Header from '@organisms/Header'
import Footer from '@organisms/Footer'
import clsx from 'clsx'

export default function AppLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname.includes('studio')) return <div>{children}</div>

  return (
    <div
      className={clsx('relative flex min-h-screen flex-col', {
        'pb-[calc(100vh-50vw-100px)] md:pb-0': pathname === '/',
      })}
    >
      <Header />
      <div className="flex-shrink-0 flex-grow overflow-hidden overscroll-y-none p-4 md:p-6">
        {children}
      </div>
      <Footer />
    </div>
  )
}

const SContentContainer = styled.div(
  ({ theme }) => `
  padding: ${theme.Spacing.wide};
  flex-grow: 1;
  flex-shrink: 0;
  overflow: hidden;
  overscroll-behavior-y: none;

  // Layout specific to mobile screen
  @media only screen and (max-width: ${theme.Spacing.large}) {
    padding: ${theme.Spacing.regular};
  }
`,
)
