import { Metadata } from 'next'
import React from 'react'

import Invite from './Invite'

export const metadata: Metadata = {
  title: {
    absolute: 'Intrnt BF B2B “–”',
  },
  description: 'June 21, 2025 7PM Under the "K" Bridge',
  openGraph: {
    images: ['/intrnt-bf-b2b-endash.png'],
  },
}

export default function Page() {
  return <Invite />
}
