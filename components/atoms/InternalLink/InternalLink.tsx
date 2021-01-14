import Link, { LinkProps } from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

export type TSlinkVariants = 'prominent' | 'subdued';

export interface IInternalLink extends LinkProps {
  /**
   * Variant determining how this link should be styled
   */
  styleType: TSlinkVariants;

  /**
   * child text to be displayed with link
   */
  children: string;
}

export const InternalLink: React.FC<IInternalLink> = ({ styleType, children, ...props }) => (
  <Link {...props} passHref>
    <SAnchor styleType={styleType}>{children}</SAnchor>
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
  ${({ theme }) => theme.Typography.emphasizedStyle};
`;
