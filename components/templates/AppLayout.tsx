'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import Header from '@organisms/Header'
import Footer from '@organisms/Footer'

export default function AppLayout({ children }) {
  const pathname = usePathname()

  return (
    <SLayoutContainer
      hasBottomPadding={pathname === '/' || pathname === '/lately'}
    >
      <Header />
      <SContentContainer>{children}</SContentContainer>
      <Footer />
    </SLayoutContainer>
  )
}

const SLayoutContainer = styled.div<{ hasBottomPadding: boolean }>(
  ({ theme, hasBottomPadding }) => `
  position: relative;

  @media (min-width: ${theme.Spacing.large}) {
    height: 100vh;
  }

  ${
    hasBottomPadding &&
    `@media (max-width: ${theme.Spacing.large}) {
    padding-bottom: calc(100vh - 50vw - 100px);
  }`
  }
`,
)

const SContentContainer = styled.div(
  ({ theme }) => `
  min-height: 100%;
  padding: ${theme.Spacing.wide};
  overflow: hidden;
  overscroll-behavior-y: none;

  // Layout specific to mobile screen
  @media only screen and (max-width: ${theme.Spacing.large}) {
    padding: ${theme.Spacing.regular};
  }
`,
)
