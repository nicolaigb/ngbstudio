'use client'

import React from 'react'
import styled from 'styled-components'

export interface IExternalLink extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * URL this link points to
   */
  href: string
}

export const ExternalLink = ({ href, children, ...props }: IExternalLink) => (
  <SExternalLink target="_blank" href={href} {...props}>
    {children}
  </SExternalLink>
)

const SExternalLink = styled.a`
  text-decoration: underline;
`
