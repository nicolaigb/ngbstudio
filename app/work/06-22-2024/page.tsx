import React from 'react'
import { Metadata } from 'next'
import Visualization from './Visualization'

export const metadata: Metadata = {
  title: {
    absolute: "Nico & Thebe's Birthday Dance Party",
  },
  description: 'June 22, 2024 9PM 354 Myrtle Ave #7, Brooklyn',
  openGraph: {
    images: ['/a-birthday-celebration.png'],
  },
}

export default function Page() {
  return <Visualization />
}
