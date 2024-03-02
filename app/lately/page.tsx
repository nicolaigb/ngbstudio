import React from 'react'
import { Metadata } from 'next'
import LatelyItems from '@constants/latelyItems'
import LatelyPage from './LatelyPage'

async function getLatelyItems() {
  const items = LatelyItems
  return items
}

export const metadata: Metadata = {
  title: 'Lately',
  description: 'Lifestyle roll',
  openGraph: {
    images: ['https://ng-web.s3.amazonaws.com/inspo/farnsworth-house.jpeg'],
  },
}

export default async function Page() {
  const items = await getLatelyItems()
  return <LatelyPage latelyItems={items} />
}
