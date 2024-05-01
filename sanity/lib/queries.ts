export const GET_WORKS_QUERY = `*[_type=='work']{
  _id, title, year,
  "slug": slug.current,
  "thumbnail": thumbnail.asset->url
} | order(year desc)`

export const GET_WORK_BY_SLUG = (
  slug: string,
) => `*[_type=='work' && slug.current=='${slug}']{
  _id, title, year, medium, content[],
  heroContent {
    type,
    alt,
    maxWidth,
    image,
    "videoSrc": video.asset->url
  } 
}[0]`

export const GET_LATELY = `*[_type=='lately']{
  _id,
  title,
  isText,
  content {
    type,
    image,
    caption,
    alt,
    maxWidth,
    url,
    "videoSrc": video.asset->url,
    embedType,
  } 
} | order(_createdAt asc)`
