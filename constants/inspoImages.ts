import { ContentData } from 'model';
import { S3_BUCKET_URL } from './works';

const images: ContentData[] = [
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/josef-albers-homage-to-the-square-arctic-bloom-1965.jpg`,
    alt: 'Josef Albers\' Homage to the Square in a grey, light blue, and orange color scheme',
    width: 300,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/farnsworth-house.jpeg`,
    alt: 'The Farnsworth House, designed by Ludwig Mies van der Rohe',
    width: 533,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/kandinsky_circles.jpeg`,
    alt: 'Artwork by Wassily Kandinsky',
    width: 294,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/jannik-sinner-gucci-wimbledon.jpeg`,
    alt: 'Italian tennis star Jannik Sinner with a custom Gucci duffel at Wimbledon 2023',
    width: 450,
    height: 300,
  },
];

export default images;
