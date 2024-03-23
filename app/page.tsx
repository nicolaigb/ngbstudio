import React from 'react'
import { client } from '@sanity/lib/client'
import { GET_WORK_QUERY } from '@sanity/lib/queries'
import { Work } from 'model'
import HomePage from './HomePage'

async function getWork() {
  const workData = await client.fetch<Work[]>(GET_WORK_QUERY)
  return workData
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const work = await getWork()
  // Forward fetched data to your Client Component
  return <HomePage works={work} />
}
