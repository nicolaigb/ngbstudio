'use client'

import React from 'react'
import Link, { LinkProps } from 'next/link'

export interface IInternalLink
  extends React.HTMLAttributes<HTMLAnchorElement>,
    LinkProps {
  // eslint-disable-next-line react/require-default-props
  underline?: boolean
}

export const InternalLink = ({
  children,
  underline,
  ...props
}: IInternalLink) => (
  <Link
    {...props}
    passHref
    style={{
      textDecoration: underline ? 'underline' : 'none',
    }}
  >
    {children}
  </Link>
)
