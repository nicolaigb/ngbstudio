import { InspoItem } from 'model';
import { S3_BUCKET_URL } from './works';

const images: InspoItem[] = [
  {
    type: 'playlist',
    src: 'https://embed.music.apple.com/us/playlist/homme/pl.u-2aoqG6LfLMxmLy',
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/josef-albers-homage-to-the-square-arctic-bloom-1965.jpg`,
    alt: 'Josef Albers\' <i>Homage to the Square</i> (1888–1976)',
    url: 'https://artblart.com/tag/homage-to-the-square/',
    width: 300,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/farnsworth-house.jpeg`,
    alt: 'The Farnsworth House, designed by Ludwig Mies van der Rohe',
    url: 'https://en.wikipedia.org/wiki/Farnsworth_House',
    width: 533,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/kandinsky_circles.jpeg`,
    alt: 'Wassily Kandinsky, <i>Several Circles</i> (1886)',
    url: 'https://www.guggenheim.org/audio/track/several-circles-1926',
    width: 294,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/jannik-sinner-gucci-wimbledon.jpeg`,
    alt: 'Jannick Sinner, Wimbledon 2023',
    url: 'https://www.cnn.com/style/jannik-sinners-gucci-bag-wimbledon/index.html',
    width: 450,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/main_image_galaxies_stephans_quintet_sq_nircam_miri_final-1280.jpeg`,
    alt: 'An image of Stephan&apos;s Quintet. One of the first taken by the James Webb telescope.',
    url: 'https://www.nasa.gov/webbfirstimages',
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
    alt: 'Dan Flavin, <i>The Diagonal</i> (1963).',
    width: 400,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/lost-in-translation.gif`,
    alt: '<i>Lost in Translation.</i> (2003)',
    width: 554,
    height: 300,
  },
];

export default images;
