'use client'

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Lately } from 'model'
import { Text } from '@atoms/Text'
import { ContentView } from '@organisms/ContentView'

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
    <SContainer ref={containerRef}>
      {latelyItems.map(({ _id, title, isText, content }) => {
        return isText ? (
          <SText styleType="title">{title}</SText>
        ) : (
          <ContentView contentObj={content} key={_id} />
        )
      })}
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.Spacing.large}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    flex-direction: row;
    overflow-x: scroll;
    overscroll-behavior-y: none;
    padding: 0 32px;
  }
`

const SText = styled(Text)`
  max-width: 500px;
`
