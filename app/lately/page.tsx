import { Metadata } from 'next'
import React from 'react'

import getLatelyItems from '@/actions/lately/getLatelyItems'

import LatelyPage from './LatelyPage'

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
