import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import WorksData from '@constants/works'
import WorkPage from './WorkPage'

type Props = {
  params: { tag: string }
}

async function getWork(tag: string) {
  const work = WorksData.filter((entry) => entry.tag === tag)[0]
  return work
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { tag } = params

  const work = await getWork(tag)
  const { title, thumbnail } = work

  const previousImages = (await parent).openGraph?.images || []

  return {
    title,
    openGraph: {
      images: [thumbnail, ...previousImages],
    },
  }
}

export default async function Page({ params }: Props) {
  const { tag } = params
  const work = await getWork(tag)
  return <WorkPage work={work} />
}
