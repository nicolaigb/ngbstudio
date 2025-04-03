import { EnvelopeIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { SiLinkedin, SiTwitter } from 'react-icons/si'

import { ExternalLink, Body } from '@atoms'

export default function Footer() {
  return (
    <div className="relative flex flex-wrap items-center justify-between border-t-0.5 border-t-black bg-white p-4 md:px-8">
      <Body variant="body">Nicolai Garcia Beckmann</Body>
      <div className="flex h-4 flex-wrap gap-4">
        <ExternalLink href="mailto:nicolai@ngb.studio">
          <EnvelopeIcon className="size-4" />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/galeo_00">
          <SiTwitter />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/nicolai-garcia-beckmann-66254114b/">
          <SiLinkedin />
        </ExternalLink>
      </div>
    </div>
  )
}
