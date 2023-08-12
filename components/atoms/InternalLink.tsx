import React from 'react';
import Link, { LinkProps } from 'next/link';

export interface IInternalLink extends LinkProps {
  // eslint-disable-next-line react/require-default-props
  underline?: boolean;

  /**
   * child text to be displayed with link
   */
  children: React.ReactNode;
}

export const InternalLink = ({
  underline = false,
  children,
  ...props
}: IInternalLink) => (
  <Link
    {...props}
    style={underline ? { textDecoration: 'underline' } : {}}
    passHref
  >
    {children}
  </Link>
);
