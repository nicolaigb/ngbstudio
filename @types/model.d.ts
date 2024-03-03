declare module 'model' {
  type TContent = 'image' | 'video' | 'screenshot'

  export interface ContentData {
    type: TContent
    src: string
    alt: string
    width?: number
    height?: number
    caption?: string
    width?: number
    height?: number
  }

  export interface IWork {
    id: Number
    thumbnail: string
    content: ContentData[]
    title: string
    tag: string
    year: string
    medium: string
  }

  export type Work = {
    _id: string,
    slug: string,
    content: any,
    heroImage: string,
    thumbnail: string,
    title: string,
  }

  export interface NavItem {
    name: string
    href: string
  }

  type TInspoType = 'image' | 'embed' | 'text'

  type TEmbed = 'appleMusic' | 'youtube'

  export interface ILatelyItem extends ContentData {
    type: TInspoType
    alt?: string
    url?: string
    embedType?: TEmbed
  }
}
