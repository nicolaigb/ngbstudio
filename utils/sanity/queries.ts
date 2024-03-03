export const GET_WORK_QUERY = `*[_type=='work']{
  _id, title,
  "slug": slug.current,
  "thumbnail": thumbnail.asset->url
}`