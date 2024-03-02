'use client'

import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import LatelyItem from 'app/lately/LatelyItem'
import { ILatelyItem } from 'model'

interface ILatelyPage {
  latelyItems: ILatelyItem[]
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
      {latelyItems.map((item, idx) => (
        <LatelyItem {...item} key={`lately-item_${idx}`} />
      ))}
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    align-items: center;
    padding: 0 32px;
  }
`
