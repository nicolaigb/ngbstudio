import React from 'react';
import { Image } from '@atoms';
import { IWork, SText } from './util';

export const Valuables = ({
  content,
}: IWork) => (
  <>
    <SText>The Valuables website was an experiment launched by Cent to test monetizing existing social content through NFTs. On the site, anybody with a twitter account is able to mint their tweets for free and place offers on other creator&apos;s tweets. The platform gained mainstream attention in March of 2021 when Twitter founder Jack Dorsey sold the first-ever tweet. After joining Cent I completely redesigned the platform with a minimalist approach, introducing a new form of navigation and onboarding process.</SText>
    <Image imageObj={content[0]} />
  </>
);
