import React from 'react';
import { Text, IText } from '@atoms/Text';
import Link, { LinkProps } from 'next/link';
import styled, { css } from 'styled-components';

export type TSlinkVariants = 'prominent' | 'subdued';

export interface IInternalLink extends LinkProps {
  /**
   * Variant determining how this link should be styled
   */
  styleType: TSlinkVariants;

  /**
   * Props for the wrapped Text component
   */
  textProps: IText;

  /**
   * child text to be displayed with link
   */
  children: string;
}

export const InternalLink: React.FC<IInternalLink> = ({
  styleType, textProps, children, ...props
}) => (
  <Link {...props} passHref>
    <SAnchor styleType={styleType}>
      <SText {...textProps}>{children}</SText>
    </SAnchor>
  </Link>
);

const prominentStyle = css`
  color: ${({ theme }) => theme.Colors.emphasis};
`;

const subduedStyle = css`
  color:${({ theme }) => theme.Colors.text};
`;

const SAnchor = styled.a<Pick<IInternalLink, 'styleType'>>`
  ${({ styleType }) => ({
    prominent: prominentStyle,
    subdued: subduedStyle,
  }[styleType])}
`;

const SText = styled(Text)``;
