import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  Text,
  ExternalLink,
} from '@atoms';
import {
  Layout,
} from '@templates';
import ending from '../public/end-ing-story.png';

const MePage = () => (
  <Layout>
    <SBody>
      <SImage src={ending} alt="A collage of screenshots of possible domain names ending with .ng" width={400} height={600} />
      <SText styleType="regular">
        <p>Welcome to end-i.ng</p>
        <p>Truth is, it&apos;s really just the beginning.</p>
        <p>🇺🇸🇩🇪🇲🇽🇪🇸 from Berkeley, CA. Stanford CS &apos;20. Currently living in Brooklyn (sick).</p>
        <p>
          I&apos;m constantly thinking about the
          {' '}
          <ExternalLink href="https://www.moma.org/calendar/exhibitions/5440">Wolfgang Tillmans MoMA show</ExternalLink>
          {' '}
          and Ludwig Mies van der Rohe&apos;s
          {' '}
          <ExternalLink href="https://en.wikipedia.org/wiki/Farnsworth_House">Farnsworth House</ExternalLink>
          . Artists that have been in my rotation lately are Little Dragon, Frank Ocean, Nicolas Jaar, Bicep, and Overmono.
        </p>
        <p>
          &ldquo;–&rdquo; is work in progress.
        </p>
        <p>I hope you enjoy my little corner of the internet. HMU with any questions / suggestions.</p>
        <p>Also, shout out 🇳🇬 for the domain.</p>
        <p>--</p>
        <p><ExternalLink href="https://ng-web.s3.amazonaws.com/nicolai-garcia_design-portfolio.pdf">Product design portfolio (PDF)</ExternalLink></p>
        <p><ExternalLink href="mailto:nicolaigarciastudios@gmail.com">Electronic mail</ExternalLink></p>
        <p><ExternalLink href="https://www.instagram.com/galeo_00/">Gram</ExternalLink></p>
        <p><ExternalLink href="https://twitter.com/galeo_00">Twitter</ExternalLink></p>
        <p><ExternalLink href="https://www.linkedin.com/in/nicolai-garcia-66254114b/">LinkedIn</ExternalLink></p>
        <p><ExternalLink href="https://music.apple.com/profile/galeo_00">Apple Music</ExternalLink></p>
      </SText>
    </SBody>
  </Layout>
);

const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SImage = styled(Image)`
  max-width: 100vw;
`;

const SText = styled(Text)`
  margin-top: 32px;
  width: 100%;
  max-width: 800px;
`;

export default MePage;
