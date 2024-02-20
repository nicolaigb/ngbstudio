import { LatelyItem } from 'model'
import { S3_BUCKET_URL } from './works'

const images: LatelyItem[] = [
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/granite-chief_02-18-2024.jpeg`,
    alt: 'I love this Experts Only graphic',
    width: 300,
    height: 400,
  },
  {
    type: 'embed',
    embedType: 'appleMusic',
    src: 'https://embed.music.apple.com/us/album/when-will-we-land/1687656892',
  },
  {
    type: 'text',
    caption: 'RealTree Website',
    src: '',
    width: 200,
  },
  {
    type: 'embed',
    embedType: 'youtube',
    src: 'https://www.youtube.com/embed/aQwobrLxmXU?si=PdxGUN_OHbWfQO6O',
    width: 250,
  },
  {
    type: 'text',
    caption: 'Return\nof\nsunshine\nephemera',
    src: '',
    width: 250,
  },
  {
    type: 'embed',
    embedType: 'youtube',
    alt: '',
    src: 'https://www.youtube.com/embed/xgJBhezlMoE?si=L72RGMly-ICKugyl&amp;controls=0',
  },
  {
    type: 'embed',
    embedType: 'appleMusic',
    src: 'https://embed.music.apple.com/us/album/boiler-room-jamie-xx-b2b-caribou-in-london-oct-11-2011-dj-mix/1504172222',
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/tracey-ermin.jpeg`,
    alt: 'Tracey Emin&apos;s painting from <i>Lovers Grace</i> at White Cube, New York showing from November 4, 2023 — January 13, 2024.',
    url: 'https://www.whitecube.com/gallery-exhibitions/tracey-emin-lovers-grave-2023',
    width: 400,
    height: 300,
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/frank-lloyd-wright_kraus.jpeg`,
    alt: 'Living room of the Frank Lloyd Wright house in Kirkwood, Missouri.',
    url: 'https://ebsworthpark.org/',
    width: 400,
    height: 300,
  },
  {
    type: 'embed',
    src: 'https://embed.music.apple.com/us/playlist/homme/pl.u-2aoqG6LfLMxmLy',
  },
  {
    type: 'image',
    src: `${S3_BUCKET_URL}/inspo/josef-albers-homage-to-the-square-arctic-bloom-1965.jpg`,
    alt: "Josef Albers' <i>Homage to the Square</i> (1888–1976)",
    width: 400,
    height: 400,
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
    alt: '<i>Lost in translation</i>, 2003',
    width: 554,
    height: 300,
  },
]

export default images
