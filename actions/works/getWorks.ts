'use server'

import { options } from '@/constants/sanityRevalidateOptions'
import { client } from '@/sanity-studio/lib/client'
import { Work } from '@/types/model'

const WORKS_QUERY = `*[_type == 'work'] | order(year desc) {
  _id,
  "slug": slug.current,
  thumbnail,
  title,
}`

export default async function getWorks() {
  const works = await client.fetch<Work[]>(WORKS_QUERY, {}, options)
  return works
}
