import React from 'react'
import styled from 'styled-components'
import { SiLinkedin, SiTwitter } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { Text, ExternalLink } from '@atoms'

export default function Footer() {
  return (
    <SPageFooterContainer>
      <Text styleType="regular">Nicolai Garcia Beckmann</Text>
      <SLinksContainer>
        <ExternalLink href="mailto:nicolai@ngb.studio">
          <MdEmail />
        </ExternalLink>
        <ExternalLink href="https://twitter.com/galeo_00">
          <SiTwitter />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/nicolai-garcia-beckmann-66254114b/">
          <SiLinkedin />
        </ExternalLink>
      </SLinksContainer>
    </SPageFooterContainer>
  )
}

const SPageFooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  border-top: 0.5px solid black;
  flex-wrap: wrap;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    padding: 16px;
  }
`

const SLinksContainer = styled.div`
  display: flex;
  gap: 16px;
  height: 16px;
  flex-wrap: wrap;
`
