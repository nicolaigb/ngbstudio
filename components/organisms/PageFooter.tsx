import React from 'react'
import styled from 'styled-components'
import {
  SiApplemusic,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
} from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { Text, ExternalLink } from '@atoms'

export const PageFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SPageFooterContainer {...props}>
    <Text styleType="emphasized">Nicolai Garcia Beckmann</Text>
    <SLinksContainer>
      <ExternalLink href="mailto:nicolaigarciabeckmann@gmail.com">
        <MdEmail size={18} />
      </ExternalLink>
      <ExternalLink href="https://www.instagram.com/galeo_00/">
        <SiInstagram size={18} />
      </ExternalLink>
      <ExternalLink href="https://twitter.com/galeo_00">
        <SiTwitter size={18} />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/nicolai-garcia-66254114b/">
        <SiLinkedin size={18} />
      </ExternalLink>
      <ExternalLink href="https://music.apple.com/profile/galeo_00">
        <SiApplemusic size={18} />
      </ExternalLink>
    </SLinksContainer>
  </SPageFooterContainer>
)

const SPageFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 24px;
  border-top: 1px solid black;
  flex-wrap: wrap;
  z-index: 200;
  background-color: white;
`

const SLinksContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`
