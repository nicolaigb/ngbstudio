import React from 'react'
import styled from 'styled-components'
import { Header, PageFooter } from '@organisms'

interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  isFeed?: boolean
  shouldShowFooter?: boolean
}

export const Layout = ({
  children,
  isFeed = false,
  shouldShowFooter = true,
  ...props
}: ILayout) => (
  <SLayoutContainer isFeed={isFeed} {...props}>
    <SHeader />
    <SContentContainer>{children}</SContentContainer>
    {shouldShowFooter && <PageFooter />}
  </SLayoutContainer>
)

const SLayoutContainer = styled.div<Pick<ILayout, 'isFeed'>>(
  ({ theme, isFeed }) => `
  position: relative;

  @media (min-width: ${theme.Spacing.large}) {
    height: 100vh;
  }

  ${
    isFeed &&
    `
    @media (max-width: ${theme.Spacing.large}) {
      padding-bottom: calc(100vh - 50vw - 100px);
    }
  `
  }
`,
)

const SHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
`

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
