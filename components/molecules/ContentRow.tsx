import React from 'react'

import { Content } from '@/types/model'

import { ContentView } from '../organisms/ContentView'

type ContentRowProps = {
  contentArr: Content[]
}

export default function ContentRow({ contentArr }: ContentRowProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-scroll">
      {contentArr.map((content) => (
        <ContentView
          className="flex-shrink-0"
          key={`content-row-item_${content._key}`}
          content={content}
        />
      ))}
    </div>
  )
}
