'use client'

import React, { useState, useRef } from 'react'

import { useScrolledToTopIndicator } from '@utils'
import { Grid } from '@templates'
import { Work } from '@/types/model'
import { TitleFooter } from '@molecules'

import WorkTile from './WorkTile'

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
          <WorkTile work={work} ref={workRefs[idx]} />
        ))}
      </Grid>
      <TitleFooter title={curWorkName} />
    </>
  )
}
