import React, { ReactElement } from 'react'
import styled from 'styled-components'

export type TSTextVariants =
  | 'title'
  | 'header'
  | 'subheader'
  | 'emphasized'
  | 'regular'
  | 'subtitle'

export interface IText extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant defining how text should be styled
   */
  styleType?: TSTextVariants
}

export const Text = ({
  styleType = 'regular',
  children,
  ...props
}: IText): ReactElement => (
  <SText styleType={styleType} {...props}>
    {children}
  </SText>
)

const SText = styled.div<Pick<IText, 'styleType'>>`
  ${({ styleType, theme }) =>
    ({
      title: theme.Typography.titleStyle,
      header: theme.Typography.headerStyle,
      subheader: theme.Typography.subheaderStyle,
      emphasized: theme.Typography.emphasizedStyle,
      regular: theme.Typography.regularStyle,
      subtitle: theme.Typography.subtitleStyle,
    })[styleType]}
  white-space: pre-line;
  color: ${({ theme }) => theme.Colors.text};

  a {
    text-decoration: underline;
  }
`
