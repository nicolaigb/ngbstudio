import React, { ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
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
  children: ReactElement | ReactElement[];
}

export const InternalLink: React.FC<IInternalLink> = ({
  styleType, children, ...props
}) => (
  <Link {...props} passHref>
    <SAnchor styleType={styleType}>
      {children}
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
