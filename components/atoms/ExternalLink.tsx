'use client'

import React from 'react'
import styled from 'styled-components'

export interface IExternalLink extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * URL this link points to
   */
  href: string

  shouldUnderline?: boolean
}

export const ExternalLink = ({
  href,
  children,
  shouldUnderline = true,
  ...props
}: IExternalLink) => (
  <a
    target="_blank"
    rel="noreferrer"
    className="hover:underline"
    href={href}
    {...props}
  >
    {children}
  </a>
)
