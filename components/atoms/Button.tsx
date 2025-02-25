'use client'

import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

export type TSButtonVariants = 'regular' | 'icon' | 'image'

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Variant defining how button is styled according to use
   */
  styleType: TSButtonVariants
  /**
   * Child components to be displayed in the button
   */
  children: ReactElement | ReactElement[]
}

export const Button: React.FC<IButton> = ({
  children,
  ...props
}): ReactElement => <SButtonContainer {...props}>{children}</SButtonContainer>

const regularButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`

const iconButtonStyle = css``

const imageButtonStyle = css`
  padding: 0;
`

const SButtonContainer = styled.button<Pick<IButton, 'styleType'>>`
  ${({ styleType }) =>
    ({
      regular: regularButtonStyle,
      icon: iconButtonStyle,
      image: imageButtonStyle,
    })[styleType]}
  border-style: none;
  outline: none;
  background: none;
`
