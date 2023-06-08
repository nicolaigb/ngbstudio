declare module 'model' {
  type TContent = 'image' | 'video';

  export interface ContentData {
    type: TContent;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    caption?: string;
    width?: number;
    height?: number;
  }

  export interface Work {
    id: Number;
    thumbnail: string;
    content: Array<ContentData>;
    title: string;
    tag: string;
    description: string;
    year: string;
    medium: string;
  }

  export interface NavItem {
    name: string;
    href: string;
  }

  export interface MoodImage {
    title: string;
    url: string;
  }
}
