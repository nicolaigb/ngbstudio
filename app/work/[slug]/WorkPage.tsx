'use client'

import React from 'react'
import { Work } from 'model'
import { Image, Text } from '@atoms'
import styled from 'styled-components'
import { PortableText } from '@portabletext/react'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '@sanity/lib/client'

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
  work: Work
}

const myPortableTextComponents = {
  types: {
    image: ({ value }) => <Image src={value.src} alt={value.alt} />,
  },
}

export default function WorkPage({ work, ...props }: IWorkDetail) {
  const { heroContent, content, title, year, medium, slug } = work
  const imageProps: any = useNextSanityImage(client, heroContent)

  return (
    <SWorkDetailContainer {...props}>
      <SHeroContent {...imageProps} />
      <SHeader>
        <Text styleType="subheader">{title}</Text>
        <Text styleType="emphasized">{year}</Text>
        <Text styleType="regular" style={{ fontStyle: 'italic' }}>
          {medium}
        </Text>
      </SHeader>
      {/* <PortableText value={content} components={myPortableTextComponents} /> */}
    </SWorkDetailContainer>
  )
}

const SWorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  position: relative;
`

const SHeroContent = styled(Image)`
  max-width: 1024px;
  height: auto;
`

const SHeader = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.Spacing.contentTextWidth};
  display: flex;
  flex-direction: column;
  gap: 8px;
`
