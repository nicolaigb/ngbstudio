import { Metadata } from 'next'
import React from 'react'

import Invite from './Invite'

export const metadata: Metadata = {
  title: {
    absolute: 'INTRNT BF B2B “–” Under the “K” Bridge June 21, 2025 7PM',
  },
  description: 'Waves eternal',
  openGraph: {
    images: ['https://ngb.studio/intrnt-bf-b2b-endash.png'],
  },
}

export default function Page() {
  return <Invite />
}
