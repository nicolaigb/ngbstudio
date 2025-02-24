'use client'

import React, { useEffect, useRef } from 'react'
import { Text } from '@atoms/Text'
import { ContentView } from '@organisms/ContentView'
import { Lately } from '@/types/model'

interface ILatelyPage {
  latelyItems: Lately[]
}

export default function LatelyPage({ latelyItems }: ILatelyPage) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const { deltaY } = event
      if (containerRef.current) {
        containerRef.current.scrollBy({
          top: 0,
          left: deltaY,
          behavior: 'auto',
        })
      }
    }

    window.addEventListener('wheel', onWheel)

    return () => {
      window.removeEventListener('wheel', onWheel)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-8 md:absolute md:left-0 md:top-0 md:h-screen md:w-screen md:flex-row md:overflow-scroll md:overscroll-none md:px-8 md:py-0"
    >
      {latelyItems.map(({ title, isText, content }) => {
        return isText ? (
          <Text styleType="title">{title}</Text>
        ) : (
          <ContentView contentObj={content} />
        )
      })}
    </div>
  )
}
