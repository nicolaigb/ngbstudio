import React from 'react'
import styled from 'styled-components'
import { Image, Text, ExternalLink } from '@atoms'
import { Layout } from '@templates'
import ending from '../public/end-ing-story.png'

const MePage = () => (
  <Layout>
    <SBody>
      <SImage
        src={ending}
        alt="A collage of screenshots of possible domain names ending with .ng"
        width={400}
        height={600}
      />
      <SText styleType="regular">
        <p>Welcome to end-i.ng</p>
        <p>Truth is, it&apos;s really just the beginning.</p>
        <p>
          🇺🇸🇩🇪🇲🇽🇪🇸 from Berkeley, CA. Currently in Brooklyn. A Design Engineer
          by trade (serving some mixture between designing and coding), I&apos;m
          using this site to display some of my professional work alongside what
          I try to craft in my free time.
        </p>
        <p>--</p>
        <p>
          <ExternalLink href="https://ng-web.s3.amazonaws.com/nicolai-garcia_design-portfolio.pdf">
            Product design portfolio (PDF)
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="mailto:nicolaigarciastudios@gmail.com">
            Electronic mail
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="https://www.instagram.com/galeo_00/">
            Gram
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="https://twitter.com/galeo_00">
            Twitter
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="https://www.linkedin.com/in/nicolai-garcia-66254114b/">
            LinkedIn
          </ExternalLink>
        </p>
        <p>
          <ExternalLink href="https://music.apple.com/profile/galeo_00">
            Apple Music
          </ExternalLink>
        </p>
      </SText>
    </SBody>
  </Layout>
)

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const SImage = styled(Image)`
  max-width: 100vw;
`

const SText = styled(Text)`
  margin-top: 32px;
  width: 100%;
  max-width: 800px;
`

export default MePage
