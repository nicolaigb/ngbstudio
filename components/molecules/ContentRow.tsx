import clsx from 'clsx'
import React from 'react'

import { Content } from '@/types/model'

import { ContentView } from '../organisms/ContentView'

type ContentRowProps = {
  contentArr: Content[]
  className?: string
}

export default function ContentRow({ contentArr, className }: ContentRowProps) {
  return (
    <div className={clsx('flex max-w-full gap-4 overflow-x-scroll', className)}>
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
