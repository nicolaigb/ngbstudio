'use client'

import React, { useState, useMemo } from 'react'

import { Work } from '@/types/model'
import { TitleFooter } from '@molecules'
import { Grid } from '@templates'
import { useScrolledToTopIndicator } from '@utils'

import WorkTile from './WorkTile'

interface IHome {
  works: Work[]
}

export default function HomePage({ works }: IHome) {
  const [curWorkName, setCurWorkName] = useState(works[0].title)
  const workRefs = useMemo(
    () =>
      Array(works.length)
        .fill(null)
        .map(() => React.createRef<HTMLDivElement>()),
    [works.length],
  )

  useScrolledToTopIndicator(workRefs, (idx) => {
    const { title } = works[idx]
    setCurWorkName(title)
  })

  return (
    <>
      <Grid>
        {works.map((work, idx) => (
          <WorkTile key={`${work._id}`} work={work} ref={workRefs[idx]} />
        ))}
      </Grid>
      <TitleFooter title={curWorkName} />
    </>
  )
}
