import React from 'react'
import WorksData from '@constants/works'
import HomePage from './HomePage'
import {client} from 'utils/sanity/client'
import { TWork } from 'model'

async function getWorks() {
  const posts = await client.fetch<TWork[]>(`*[_type == "work"]`)
  console.log(posts)
  return WorksData
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const works = await getWorks()
  // Forward fetched data to your Client Component
  return <HomePage works={works} />
}
