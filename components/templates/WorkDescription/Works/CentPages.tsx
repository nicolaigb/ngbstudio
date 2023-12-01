import React from 'react'
import { ContentView } from '@molecules/ContentView'
import { ExternalLink } from '@atoms/ExternalLink'
import { IWork, SText } from './util'

export const CentPages = ({ content }: IWork) => (
  <>
    <SText>
      <p>
        <ExternalLink href="https://cent.co">This product</ExternalLink>{' '}
        provides accessible tools for artists to mint and distribute NFTs for
        free. Modeled after a &ldquo;Link in Bio&rdquo; site, a Cent Page allows
        creators to create a personal web page and style it to their liking.
        Cent built a media channel on top of this familiar paradigm, allowing
        creators to draft and release multimedia posts to their subscribers.
        Minted as NFTs on the Polygon blockchain, subscribers are able to
        collect these NFTs for free or for USD.
      </p>
      <p>
        The motivation behind the product was to lower the barrier for entry
        into the web3 and collectible ecosystem for both creators and
        collectors. As such, the design had to feel familiar to users coming
        from all parts of the web. Using the LinkTree-esque design as a Trojan
        horse, we were able to introduce people to NFTs without the foreign
        feeling of other NFT products.
      </p>
      <p>
        I designed and implemented this product from the ground up, crafting its
        design system and iterating on its core UI.
      </p>
      <p>
        Below are links to some of my favorite creators&apos; pages built with
        the product.
      </p>
    </SText>
    <ExternalLink href="https://alicedied.cent.co/">
      <ContentView data={content[1]} />
    </ExternalLink>
    <ExternalLink href="https://raphaelprinz.cent.co/">
      <ContentView data={content[2]} />
    </ExternalLink>
    <ExternalLink href="https://cam.cent.co/">
      <ContentView data={content[3]} />
    </ExternalLink>
  </>
)
