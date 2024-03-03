'use client'

import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useScrolledToTopIndicator } from '@utils'
import { Grid } from '@templates'

import { Work } from 'model'
import { InternalLink } from '@atoms'
import { ContentPreview, TitleFooter } from '@molecules'
import Link from 'next/link'

interface IHome {
  works: Work[]
}

export default function HomePage({ works }: IHome) {
  const [curWorkName, setCurWorkName] = useState(works[0].title)
  const workRefs: React.RefObject<HTMLDivElement>[] = Array.from(
    { length: works.length },
    () => useRef(null),
  )

  useScrolledToTopIndicator(workRefs, (idx) => {
    const { title } = works[idx]
    setCurWorkName(title)
  })

  return (
    <>
      <Grid>
        {works.map((work, idx) => (
          <SContentPreviewContainer
            key={`ContentPreview_${idx}`}
            ref={workRefs[idx]}
          >
            <Link href={`/work/${work.slug}`}>
              <ContentPreview
                key={`ContentPreview_${idx}`}
                name={work.title}
                src={work.thumbnail}
              />
            </Link>
          </SContentPreviewContainer>
        ))}
      </Grid>
      <TitleFooter title={curWorkName} />
    </>
  )
}
const SContentPreviewContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;

  a {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  a:focus-visible {
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
    border-radius: 1px;
  }
`
