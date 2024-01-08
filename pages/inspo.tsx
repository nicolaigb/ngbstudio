import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Layout } from '@templates'
import InspoData from '@constants/inspoItems'
import Image from 'next/image'
import { Playlist, Footer } from '@molecules'
import { ExternalLink } from '@atoms/ExternalLink'
import { useScrolledToTopIndicator } from '@utils/useScrolledToTopIndicator'
import { InspoItem } from 'model'

export async function getStaticProps() {
  return {
    props: { inspoItems: InspoData },
  }
}

interface IInspo {
  inspoItems: InspoItem[]
}

const renderInspoItem = (item: InspoItem) => {
  const { type, src, alt, width, height, url } = item
  switch (type) {
    case 'image': {
      const image = (
        <SImage src={src} alt={alt ?? ''} width={width} height={height} />
      )
      return url ? <ExternalLink href={url}>{image}</ExternalLink> : image
    }
    case 'playlist':
      return <Playlist playlistObj={item} />
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
            <div
              ref={inspoRefs[idx]}
              key={`InspoItem_${idx}`}
              onMouseEnter={() => setCurCaption(item.alt)}
              onMouseLeave={() => setCurCaption(undefined)}
            >
              {renderInspoItem(item)}
            </div>
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
    gap: 16px;
    align-items: center;
    padding: 0 32px;
  }
`

const SImage = styled(Image)`
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
`

export default Inspo
