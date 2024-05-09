declare module 'model' {
  type TContent = 'image' | 'video' | 'screenshot' | 'embed'

  type TEmbed = 'appleMusic' | 'youtube' | 'soundcloud'

  export interface Content {
    type: TContent
    alt: string
    maxWidth: number
    image?: any
    videoSrc?: string
    caption: string
    url?: string
    embedType: TEmbed
  }

  export interface IWork {
    id: Number
    thumbnail: string
    content: Content[]
    title: string
    tag: string
    year: string
    medium: string
  }

  export type Work = {
    _id: string
    slug: string
    content: any
    heroContent: Content
    thumbnail: string
    title: string
    year: string
    medium: string
  }

  export type Lately = {
    _id: string
    title: string
    isText: boolean
    content: Content
  }

  export interface NavItem {
    name: string
    href: string
  }

  type TInspoType = 'image' | 'embed' | 'text'

  export interface ILatelyItem extends Content {
    type: TInspoType
    alt?: string
    url?: string
    embedType?: TEmbed
  }
}
