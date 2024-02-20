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
  <SLayoutContainer {...props}>
    <SHeader />
    <SContentContainer isFeed={isFeed}>{children}</SContentContainer>
    {shouldShowFooter && <PageFooter />}
  </SLayoutContainer>
)

const SLayoutContainer = styled.div(
  ({ theme }) => `
  position: relative;

  @media (min-width: ${theme.Spacing.large}) {
    height: 100vh;
  }
`,
)

const SHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
`

const SContentContainer = styled.div<Pick<ILayout, 'isFeed'>>(
  ({ theme, isFeed }) => `
  min-height: calc(100% - 116px);
  padding: ${theme.Spacing.wide};
  overflow: hidden;
  overscroll-behavior-y: none;

  // Layout specific to mobile screen
  @media only screen and (max-width: ${theme.Spacing.large}) {
    padding: ${theme.Spacing.regular};
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
