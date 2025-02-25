import React from 'react'

import { ContentView } from '../organisms/ContentView'

import { Content } from '@/types/model'

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
