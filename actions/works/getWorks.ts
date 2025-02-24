'use server'

import { client } from '@/sanity-studio/lib/client'
import { Work } from '@/types/model'

const WORKS_QUERY = `*[_type == 'work'] | order(year desc) {
  _id,
  "slug": slug.current,
  thumbnail,
  title,
}`

const options = { next: { revalidate: 30 } }

export default async function getWorks() {
  return await client.fetch<Work[]>(WORKS_QUERY, {}, options)
}
