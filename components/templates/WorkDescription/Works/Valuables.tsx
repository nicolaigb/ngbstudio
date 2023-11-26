import React from 'react'
import { ContentView } from '@molecules/ContentView'
import { IWork, SContentViewPair, SText } from './util'

export const Valuables = ({ content }: IWork) => (
  <>
    <SText>
      The Valuables website was an experiment launched by Cent in monetizing
      existing social content through NFTs. On the site, anybody with a twitter
      account was able to mint their own tweets for free and place offers on
      other creator&apos;s tweets. The platform gained attention in March, 2021
      when Twitter founder Jack Dorsey sold the first-ever tweet om Valuables.
    </SText>
    <ContentView data={content[1]} />
    <SText>
      At Cent, I redesigned the platform, introducing a new-user onboarding
      experience and a gallery for displaying the tweets you&apos;ve minted and
      collected.
    </SText>
    <ContentView marginBottom="16px" data={content[2]} />
    <SContentViewPair>
      <ContentView data={content[3]} />
      <ContentView data={content[4]} />
    </SContentViewPair>
  </>
)
