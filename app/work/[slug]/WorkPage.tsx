'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import React from 'react'

import ContentRow from '@/components/molecules/ContentRow'
import { Work } from '@/types/model'
import { P, H4, H3, Body } from '@atoms'
import { ContentView } from '@organisms/ContentView'

export type WorkPageProps = React.HTMLAttributes<HTMLDivElement> & {
  work: Work
}

const myPortableTextComponents: PortableTextComponents = {
  types: {
    content: ({ value }) => <ContentView className="my-4" content={value} />,
    contentRow: ({ value }) => (
      <ContentRow className="my-6" contentArr={value.content} />
    ),
  },
  block: {
    normal: ({ children }) => (
      <P variant="p" className="w-textContentWidth max-w-full">
        {children}
      </P>
    ),
    h4: ({ children }) => (
      <H4 variant="h4" className="my-2 w-textContentWidth max-w-full">
        {children}
      </H4>
    ),
  },
}

export default function WorkPage({ work, ...props }: WorkPageProps) {
  const { heroContent, content, title, year, medium } = work

  return (
    <div className="relative flex flex-col items-center gap-2 py-8" {...props}>
      <ContentView content={heroContent} />
      <div className="w-textContentWidth max-w-full space-y-1 py-4">
        <H3 isPlus>{title}</H3>
        <Body>{year}</Body>
        <Body variant="body" className="italic">
          {medium}
        </Body>
      </div>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
