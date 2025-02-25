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
    contentRow: ({ value }) => <ContentRow contentArr={value.content} />,
  },
  block: ({ children }) => (
    <Text className="w-textContentWidth max-w-full">{children}</Text>
  ),
}

export default function WorkPage({ work, ...props }: WorkPageProps) {
  const { heroContent, content, title, year, medium } = work

  return (
    <div className="relative flex flex-col items-center gap-6 py-8" {...props}>
      <ContentView content={heroContent} />
      <div className="w-textContentWidth max-w-full space-y-2 py-4">
        <Text styleType="subheader">{title}</Text>
        <Text styleType="emphasized">{year}</Text>
        <Text styleType="regular" style={{ fontStyle: 'italic' }}>
          {medium}
        </Text>
      </div>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
