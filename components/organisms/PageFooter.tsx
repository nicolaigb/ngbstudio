import React from 'react'
import styled from 'styled-components'
import { SiLinkedin, SiTwitter } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { Text, ExternalLink } from '@atoms'

export const PageFooter = ({
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <SPageFooterContainer {...props}>
    <Text styleType="regular">Nicolai Garcia Beckmann</Text>
    <SLinksContainer>
      <SExternalLink href="mailto:nicolai@ngb.studio">
        <MdEmail />
      </SExternalLink>
      <SExternalLink href="https://twitter.com/galeo_00">
        <SiTwitter />
      </SExternalLink>
      <SExternalLink href="https://www.linkedin.com/in/nicolai-garcia-beckmann-66254114b/">
        <SiLinkedin />
      </SExternalLink>
    </SLinksContainer>
  </SPageFooterContainer>
)

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

const SExternalLink = styled(ExternalLink)`
  color: #c4c4c4;

  &:hover {
    color: black;
  }
`
