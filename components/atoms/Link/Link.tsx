import Link, { LinkProps } from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

export type TSlinkVariants = 'prominent' | 'subdued';

export interface ILink extends LinkProps {
  /**
   * Variant determining how this link should be styled
   */
  styleType: TSlinkVariants;

  /**
   * child text to be displayed with link
   */
  children: string;
}

export const SLink: React.FC<ILink> = ({ styleType, children, ...props }) => (
  <Link {...props} passHref>
    <SLinkText styleType={styleType}>{children}</SLinkText>
  </Link>
);

const prominentStyle = css`
  color: ${({ theme }) => theme.Colors.emphasis};
`;

const subduedStyle = css`
  color:${({ theme }) => theme.Colors.text};
`;

const SLinkText = styled.a<Pick<ILink, 'styleType'>>`
  ${({ styleType }) => ({
    prominent: prominentStyle,
    subdued: subduedStyle,
  }[styleType])}
  ${({ theme }) => theme.Typography.emphasizedStyle};
`;
