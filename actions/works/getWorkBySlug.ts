import { options } from '@/constants/sanityRevalidateOptions'
import { client } from '@/sanity-studio/lib/client'
import { Work } from '@/types/model'

const GET_WORK_BY_SLUG_QUERY = (
  slug: string,
) => `*[_type == "work" && slug.current == "${slug}"]{
  thumbnail,
  heroContent {
    ...,
    "videoSrc": video.asset->url,
  },
  title,
  year,
  medium,
  content,
}[0]`

export default async function getWorkBySlug(slug: string) {
  const work = await client.fetch<Work>(
    GET_WORK_BY_SLUG_QUERY(slug),
    {},
    options,
  )
  return work
}
