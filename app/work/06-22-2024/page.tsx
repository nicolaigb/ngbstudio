import React from 'react'
import { Metadata } from 'next'
import Visualization from './Visualization'

export const metadata: Metadata = {
  title: 'A Birthday Celebration',
  description: 'June 22, 2024 9PM 354 Myrtle Ave, Brooklyn',
  openGraph: {
    images: ['/a-birthday-celebration.png'],
  },
}

export default function Page() {
  return <Visualization />
}
