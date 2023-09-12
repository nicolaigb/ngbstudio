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
    alt: 'Italian tennis star Jannik Sinner with a custom Gucci duffel bag at Wimbledon 2023',
    width: 450,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/main_image_galaxies_stephans_quintet_sq_nircam_miri_final-1280.jpeg`,
    alt: 'An image of Stephan&apos;s Quintet. One of the first taken by the James Webb telescope.',
    width: 313,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/valais-blacknose-sheep.jpeg`,
    alt: 'A group of Valais Blacknose sheep',
    width: 438.5,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/dan-flavin_the-diagonal_may-25-1963_pink.jpg`,
    alt: 'The Diagonal, Dan Flavin (May 25, 1963). A diagonal pink fluorescent light.',
    width: 400,
    height: 300,
  },
];

export default images;
