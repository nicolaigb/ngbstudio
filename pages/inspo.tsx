import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Layout } from '@templates'
import InspoData from '@constants/inspoItems'
import { Embed, Footer } from '@molecules'
import { Text, Image, ExternalLink } from '@atoms'
import { useScrolledToTopIndicator } from '@utils/useScrolledToTopIndicator'
import { ContentData, InspoItem } from 'model'

export async function getStaticProps() {
  return {
    props: { inspoItems: InspoData },
  }
}

interface IInspo {
  inspoItems: InspoItem[]
}

const renderInspoItem = (item: InspoItem) => {
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

const Inspo = ({ inspoItems }: IInspo) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [curCaption, setCurCaption] = useState<string | undefined>(undefined)

  const inspoRefs: React.RefObject<HTMLDivElement>[] = Array.from(
    { length: inspoItems.length },
    () => useRef(null),
  )

  useScrolledToTopIndicator(inspoRefs, (idx) => {
    const { alt } = inspoItems[idx]
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
      <Layout isFeed>
        <SContainer ref={containerRef}>
          {inspoItems.map((item, idx) => (
            <SInspoItemContainer
              ref={inspoRefs[idx]}
              key={`InspoItem_${idx}`}
              onMouseEnter={() => setCurCaption(item.alt)}
              onMouseLeave={() => setCurCaption(undefined)}
            >
              {renderInspoItem(item)}
            </SInspoItemContainer>
          ))}
        </SContainer>
      </Layout>
      <Footer title={curCaption} isPresentOnDesktop renderDescription />
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
