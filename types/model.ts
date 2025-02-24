import { SanityImageSource } from '@sanity/asset-utils'

type TContent = 'image' | 'video' | 'screenshot' | 'embed'

type TEmbed = 'appleMusic' | 'youtube' | 'soundcloud'

export type Content = {
  type: TContent
  alt: string
  maxWidth: number
  image?: SanityImageSource
  videoSrc?: string
  caption?: string
  url?: string
  embedType?: TEmbed
}

export type Work = {
  _id: string
  slug: string
  content: any
  heroContent: Content
  thumbnail: SanityImageSource
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
