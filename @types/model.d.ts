declare module 'model' {
  export interface Work {
    id: Number;
    title: string;
    tag: string;
    year: string;
    description: string;
    thumbnail: string;
    images: string[];
    createdAt: string;
  }

  export interface MoodImage {
    title: string;
    url: string;
  }
}
