import React from 'react';
import styled from 'styled-components';
import { Work } from 'model';
import { ContentView } from '@molecules/ContentView';
import {
  SBodyText, WorkHeader, SImagePair,
} from './util';

export const Valuables = ({
  content,
  title,
  year,
  medium,
}: Work) => (
  <>
    <ContentView isScreenshot data={content[0]} />
    <WorkHeader title={title} year={year} medium={medium} />
    <SBodyText>
      The Valuables website was an experiment launched by Cent in monetizing existing social content through NFTs.
      On the site, anybody with a twitter account was able to mint their own tweets for free and place offers on other
      creator&apos;s tweets. The platform gained attention in March, 2021 when Twitter founder Jack Dorsey
      sold the first-ever tweet om Valuables.
    </SBodyText>
    <ContentView isScreenshot data={content[1]} />
    <SBodyText>
      At Cent, I redesigned the platform, introducing a new-user onboarding experience and a gallery for displaying the tweets you&apos;ve minted and collected.
    </SBodyText>
    <SHeroImage isScreenshot data={content[2]} />
    <SImagePair>
      <ContentView isScreenshot data={content[3]} />
      <ContentView isScreenshot data={content[4]} />
    </SImagePair>
  </>
);

const SHeroImage = styled(ContentView)`
  margin-bottom: 16px;
`;
