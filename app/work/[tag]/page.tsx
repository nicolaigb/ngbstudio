import React from 'react'
import { Metadata } from 'next'
import WorksData from '@constants/works'
import WorkPage from './WorkPage'

type Props = {
  params: { tag: string }
}

async function getWork(tag: string) {
  const work = WorksData.filter((entry) => entry.tag === tag)[0]
  return work
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = params

  const work = await getWork(tag)
  const { title, thumbnail } = work

  return {
    title,
    openGraph: {
      images: [thumbnail],
    },
  }
}

export default async function Page({ params }: Props) {
  const { tag } = params
  const work = await getWork(tag)
  return <WorkPage work={work} />
}
