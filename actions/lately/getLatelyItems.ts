'use server'

import { options } from '@/constants/sanityRevalidateOptions'
import { client } from '@/sanity-studio/lib/client'
import { Lately } from '@/types/model'

const LATELY_QUERY = `*[_type == 'lately'] | order(_createdAt desc) {
  _id,
  title,
  isText,
  content {
    ...,
    "videoSrc": video.asset->url
  }
}`

export default async function getLatelyItems() {
  const latelyItems = await client.fetch<Lately[]>(LATELY_QUERY, {}, options)
  return latelyItems
}
