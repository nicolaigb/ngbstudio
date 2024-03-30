'use client'

import React from 'react'
import { Work } from 'model'
import { Text } from '@atoms'
import styled from 'styled-components'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import { ContentView } from './ContentView'

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
  work: Work
}

const myPortableTextComponents: PortableTextComponents = {
  types: {
    content: ({ value }) => <ContentView contentObj={value} />,
  },
  block: ({ children }) => <SBodyText>{children}</SBodyText>,
}

export default function WorkPage({ work, ...props }: IWorkDetail) {
  const { heroContent, content, title, year, medium } = work

  return (
    <SWorkDetailContainer {...props}>
      <ContentView contentObj={heroContent} />
      <SHeader>
        <Text styleType="subheader">{title}</Text>
        <Text styleType="emphasized">{year}</Text>
        <Text styleType="regular" style={{ fontStyle: 'italic' }}>
          {medium}
        </Text>
      </SHeader>
      <PortableText value={content} components={myPortableTextComponents} />
    </SWorkDetailContainer>
  )
}

const SWorkDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  position: relative;
  padding: 32px 0px;
`

const SHeader = styled.div`
  width: ${({ theme }) => theme.Spacing.contentTextWidth};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`

const SBodyText = styled(Text)`
  width: ${({ theme }) => theme.Spacing.contentTextWidth};
  max-width: 100%;
`
