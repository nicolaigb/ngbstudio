'use client'

import Link, { LinkProps } from 'next/link'
import React from 'react'

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
