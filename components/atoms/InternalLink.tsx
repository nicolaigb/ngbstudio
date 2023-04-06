import React from 'react';
import Link, { LinkProps } from 'next/link';

export type TSlinkVariants = 'prominent' | 'subdued';

export interface IInternalLink extends LinkProps {
  /**
   * Variant determining how this link should be styled
   */
  styleType: TSlinkVariants;

  /**
   * child text to be displayed with link
   */
  children: React.ReactNode;
}

export function InternalLink({
  styleType, children, ...props
}: IInternalLink) {
  return (
    <Link {...props} passHref>
      {children}
    </Link>
  );
}
