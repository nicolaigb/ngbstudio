import React from 'react'
import WorksData from '@constants/works'
import HomePage from './home-page'

async function getWorks() {
  return WorksData
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const works = await getWorks()
  // Forward fetched data to your Client Component
  return <HomePage works={works} />
}
