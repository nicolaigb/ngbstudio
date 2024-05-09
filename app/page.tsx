import React from 'react'
import { client } from '@sanity/lib/client'
import { GET_WORKS_QUERY } from '@sanity/lib/queries'
import { Work } from 'model'
import HomePage from './HomePage'

async function getWorks() {
  const worksData = await client.fetch<Work[]>(GET_WORKS_QUERY)
  return worksData
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const works = await getWorks()
  // Forward fetched data to your Client Component
  return <HomePage works={works} />
}
