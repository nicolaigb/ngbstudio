import { Text } from '@atoms/Text'
import React from 'react'
import styled from 'styled-components'

interface IFooter extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  renderDescription?: boolean
  isPresentOnDesktop?: boolean
}

export const Footer = ({
  title,
  renderDescription = false,
  isPresentOnDesktop = false,
  ...props
}: IFooter) => {
  if (!title) return null
  return (
    <STitleIndicatorContainer
      isPresentOnDesktop={isPresentOnDesktop}
      {...props}
    >
      {renderDescription ? (
        <Text dangerouslySetInnerHTML={{ __html: title }} />
      ) : (
        <Text styleType="emphasized">{title}</Text>
      )}
    </STitleIndicatorContainer>
  )
}

const STitleIndicatorContainer = styled.div<
  Pick<IFooter, 'isPresentOnDesktop'>
>(
  ({ theme, isPresentOnDesktop }) => `
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px) brightness(124%);
  padding: 16px;
  z-index: 100;

  @media (min-width: ${theme.Spacing.large}) {
    padding-bottom: 32px;
    ${isPresentOnDesktop ? '' : 'display: none'};
  }
`,
)
