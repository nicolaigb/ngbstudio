declare module 'model' {
  export interface Work {
    id: Number;
    title: string;
    tag: string;
    thumbnail: string;
  }

  export interface NavItem {
    name: string;
    slug: string;
  }

  export interface MoodImage {
    title: string;
    url: string;
  }
}
