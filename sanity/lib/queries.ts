export const GET_WORK_QUERY = `*[_type=='work']{
  _id, title,
  "slug": slug.current,
  "thumbnail": thumbnail.asset->url
}`

export const GET_WORK_BY_SLUG = (
  slug: string,
) => `*[_type=='work' && slug.current=='${slug}']{
  _id, title, year, medium, heroContent,
  content[]{
    _type,
    _key,
    _type=='image' => {
      "src": @.asset->url,
      alt,
    },
    _type!='image' => {
      children, style
    }
  }
}[0]`
