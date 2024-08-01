import React from 'react'
import { Metadata } from 'next'
import { client } from '@sanity/lib/client'
import { Lately } from 'model'
import { GET_LATELY } from '@sanity/lib/queries'
import LatelyPage from './LatelyPage'

export const revalidate = 3600

async function getLatelyItems() {
  const items = await client.fetch<Lately[]>(GET_LATELY)
  return items
}

export const metadata: Metadata = {
  title: 'Lately',
  description: 'Lifestyle roll',
  openGraph: {
    images: [
      'https://cdn.sanity.io/images/8vo2xd83/production/ff47b4d62275f4a2e7a4807b609c70917176f063-1000x562.jpg',
    ],
  },
}

export default async function Page() {
  const items = await getLatelyItems()
  return <LatelyPage latelyItems={items} />
}
