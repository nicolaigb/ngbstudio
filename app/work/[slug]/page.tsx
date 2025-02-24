import React from 'react'
import { Metadata } from 'next'
import WorkPage from './WorkPage'
import getWorkBySlug from '@/actions/works/getWorkBySlug'
import { getImageProps } from '@/sanity-studio/lib/image'
import { Text } from '@/components/atoms'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function Page({ params }: Props) {
  const { slug } = await params
  const work = await getWorkBySlug(slug)

  return <WorkPage work={work} />
}
