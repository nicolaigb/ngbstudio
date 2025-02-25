import { Metadata } from 'next'
import React from 'react'

import getWorkBySlug from '@/actions/works/getWorkBySlug'
import { getImageProps } from '@/sanity-studio/lib/image'

import WorkPage from './WorkPage'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params

  const work = await getWorkBySlug(slug)
  const { title, thumbnail } = work

  const imageProps = getImageProps({ image: thumbnail, alt: '' })
  const src = imageProps?.src

  return {
    title,
    openGraph: {
      images: [(src as string) ?? ''],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const work = await getWorkBySlug(slug)

  return <WorkPage work={work} />
}
