import React from 'react'
import styled from 'styled-components'

import { Text } from '@atoms/Text'

interface IFooter extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  renderDescription?: boolean
}

export const TitleFooter = ({
  title,
  renderDescription = false,
  ...props
}: IFooter) => {
  if (!title) return null
  return (
    <STitleFooterContainer {...props}>
      {renderDescription ? (
        <Text dangerouslySetInnerHTML={{ __html: title }} />
      ) : (
        <Text styleType="emphasized">{title}</Text>
      )}
    </STitleFooterContainer>
  )
}

const STitleFooterContainer = styled.div(
  ({ theme }) => `
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px) brightness(124%);
  padding: 16px;
  z-index: 100;

  @media (min-width: ${theme.Spacing.large}) {
    display: none;
  }
`,
)
