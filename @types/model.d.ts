declare module 'model' {
  export interface Work {
    id: Number;
    images: Array<string>;
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
