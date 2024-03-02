import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import LatelyData from '@constants/latelyItems'
import { Embed, TitleFooter } from '@molecules'
import { Text, Image, ExternalLink } from '@atoms'
import { useScrolledToTopIndicator } from '@utils/useScrolledToTopIndicator'
import { ContentData, LatelyItem } from 'model'

export async function getStaticProps() {
  return {
    props: { latelyItems: LatelyData },
  }
}

interface IInspo {
  latelyItems: LatelyItem[]
}

const renderInspoItem = (item: LatelyItem) => {
  const { type, embedType, src, alt, width, height, url, caption } = item
  switch (type) {
    case 'image': {
      const image = (
        <SImage src={src} alt={alt ?? ''} width={width} height={height} />
      )
      return url ? <ExternalLink href={url}>{image}</ExternalLink> : image
    }
    case 'embed':
      return <SEmbed embedType={embedType ?? 'appleMusic'} src={src} />
    case 'text':
      return (
        <SText width={width} styleType="title">
          {caption}
        </SText>
      )
    default:
      return null
  }
}

const Inspo = ({ latelyItems }: IInspo) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [curCaption, setCurCaption] = useState<string | undefined>(undefined)

  const latelyItemRefs: React.RefObject<HTMLDivElement>[] = Array.from(
    { length: latelyItems.length },
    () => useRef(null),
  )

  useScrolledToTopIndicator(latelyItemRefs, (idx) => {
    const { alt } = latelyItems[idx]
    setCurCaption(alt)
  })

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
    <>
      <SContainer ref={containerRef}>
        {latelyItems.map((item, idx) => (
          <SInspoItemContainer
            ref={latelyItemRefs[idx]}
            key={`InspoItem_${idx}`}
            onMouseEnter={() => setCurCaption(item.alt)}
            onMouseLeave={() => setCurCaption(undefined)}
          >
            {renderInspoItem(item)}
          </SInspoItemContainer>
        ))}
      </SContainer>
      <TitleFooter title={curCaption} isPresentOnDesktop renderDescription />
    </>
  )
}

const SContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.Spacing.large}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow-x: scroll;
    overscroll-behavior-y: none;
    gap: 32px;
    align-items: center;
    padding: 0 32px;
  }
`

const SInspoItemContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    width: 100%;
    margin-bottom: 16px;
  }
`

const SImage = styled(Image)`
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    width: 100%;
    height: auto;
  }
  border-radius: 4px;
`

const SEmbed = styled(Embed)`
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    width: 100%;
  }
`

const SText = styled(Text)<Pick<ContentData, 'width' | 'height'>>(
  ({ width, height }) => `
  width: ${width}px;
  height: ${height}px;
  padding: 4px;
  box-sizing: unset;
`,
)

export default Inspo
