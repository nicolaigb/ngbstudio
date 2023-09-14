import React from 'react';
import { Image } from '@atoms';
import { IWork, SText } from './util';

export const CentPages = ({
  content,
}: IWork) => (
  <>
    <SText>This product provides accessible tools for artists to mint and distribute NFTs for free. Modeled after a &ldquo;Link in Bio&rdquo; site, a Cent Page allows creators to can style their page to their liking, and draft multi-media NFTs to promote their work or reward their audience with collectibles. Visitors to their page can then subscribe via email and collect these NFTs for free.</SText>
    <Image imageObj={content[1]} />
  </>
);
