import React from 'react'
import styled from 'styled-components'
import { Header } from '@organisms'

interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  isFeed?: boolean
}

export const Layout = ({ children, isFeed = false, ...props }: ILayout) => (
  <SLayoutContainer isFeed={isFeed} {...props}>
    <SHeader />
    <SContentContainer>{children}</SContentContainer>
  </SLayoutContainer>
)

const SLayoutContainer = styled.div<Pick<ILayout, 'isFeed'>>(
  ({ theme, isFeed }) => `
  ${
    isFeed &&
    `
    @media (max-width: ${theme.Spacing.large}) {
      padding-bottom: calc(100vh - 50vw - 100px);
    }
  `
  }
  position: relative;
`,
)

const SHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
`

const SContentContainer = styled.div`
  padding: ${({ theme }) => theme.Spacing.wide};
  overflow: hidden;
  overscroll-behavior-y: none;
  // Layout specific to mobile screen
  @media only screen and (max-width: ${({ theme }) => theme.Spacing.large}) {
    padding: ${({ theme }) => theme.Spacing.regular};
  }
`
