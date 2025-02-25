import React from 'react'

import getWorks from '@/actions/works/getWorks'

import HomePage from './HomePage'

export default async function Page() {
  // Fetch data directly in a Server Component
  const works = await getWorks()
  // Forward fetched data to your Client Component
  return <HomePage works={works} />
}
