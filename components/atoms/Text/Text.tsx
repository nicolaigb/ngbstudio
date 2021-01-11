import React, { ReactElement } from 'react';
import styled from 'styled-components';

export type TSTextVariants = 'header' | 'subheader' | 'emphasized' | 'regular' | 'subtitle';

export interface IText extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variant defining how text should be styled
   */
  styleType: TSTextVariants

  /**
   * Text to be displayed
   */
  text: string,
}

export const Text: React.FC<IText> = ({
  styleType,
  text,
  ...props
}): ReactElement => <SText styleType={styleType} {...props}>{text}</SText>;

const SText = styled.div<Pick<IText, 'styleType'>>`
${({ styleType, theme }) => ({
    header: theme.Typography.headerStyle,
    subheader: theme.Typography.subheaderStyle,
    emphasized: theme.Typography.emphasizedStyle,
    regular: theme.Typography.regularStyle,
    subtitle: theme.Typography.subtitleStyle,
  }[styleType])}
`;
