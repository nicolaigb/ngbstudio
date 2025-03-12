'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import React from 'react'

import ContentRow from '@/components/molecules/ContentRow'
import { Work } from '@/types/model'
import { Text } from '@atoms'
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
      <Text variant="p" className="w-textContentWidth">
        {children}
      </Text>
    ),
    h4: ({ children }) => (
      <Text variant="h4" className="my-2 w-textContentWidth">
        {children}
      </Text>
    ),
  },
}

export default function WorkPage({ work, ...props }: WorkPageProps) {
  const { heroContent, content, title, year, medium } = work

  return (
    <div className="relative flex flex-col items-center gap-2 py-8" {...props}>
      <ContentView content={heroContent} />
      <div className="w-textContentWidth max-w-full space-y-1 py-4">
        <Text variant="h3" isPlus>
          {title}
        </Text>
        <Text variant="body">{year}</Text>
        <Text variant="body" className="italic">
          {medium}
        </Text>
      </div>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
