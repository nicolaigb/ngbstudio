import React from 'react'
import WorksData from '@constants/works'
import HomePage from './HomePage'
import {client} from 'utils/sanity/client'
import { GET_WORK_QUERY } from '@utils/sanity/queries'
import { Work } from 'model'

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
