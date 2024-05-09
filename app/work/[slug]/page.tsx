import React from 'react'
import { Metadata } from 'next'
import { client } from '@sanity/lib/client'
import { GET_WORK_BY_SLUG } from '@sanity/lib/queries'
import { Work } from 'model'
import WorkPage from './WorkPage'

type Props = {
  params: { slug: string }
}

async function getWork(slug: string) {
  const work = await client.fetch<Work>(GET_WORK_BY_SLUG(slug))
  return work
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params

  const work = await getWork(slug)
  const { title, thumbnail } = work

  return {
    title,
    openGraph: {
      images: [thumbnail],
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = params
  const work = await getWork(slug)
  return <WorkPage work={work} />
}
