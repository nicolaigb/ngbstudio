/* eslint-disable no-multi-str */
import { Work } from 'model';

export const S3_BUCKET_URL = 'https://ng-web.s3.amazonaws.com';

const works: Work[] = [
  {
    id: 6,
    title: 'Up to Us voter registration',
    tag: 'up-to-us',
    thumbnail: `${S3_BUCKET_URL}/up-to-us/up-to-us_thumbnail.png`,
    content: [
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/up-to-us/up-to-us_00.png`,
        alt: 'Screenshots of voter registration flow',
        width: 982.5,
        height: 639,
      },
    ],
    year: '2022',
    medium: 'Product design',
  },
  {
    id: 5,
    title: 'Cent pages',
    tag: 'cent-pages',
    thumbnail: `${S3_BUCKET_URL}/cent-pages/cent-pages_00.png`,
    content: [
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/cent-pages/cent-pages_00.png`,
        alt: 'Collection of different creator pages made using Cent Pages',
        width: 2560,
        height: 1440,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/cent-pages/cent-pages_01.png`,
        alt: 'Screenshot of the Cent Pages creator interface.',
        width: 3024,
        height: 1890,
      },
    ],
    year: '2021–22',
    medium: 'Product design',
  },
  {
    id: 4,
    title: 'Valuables',
    tag: 'valuables',
    thumbnail: `${S3_BUCKET_URL}/valuables/valuables_thumbnail.png`,
    content: [
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/valuables/valuables_00.png`,
        alt: 'Screenshot of the Valuables homepage',
        width: 3024,
        height: 1890,
        isScreenshot: true,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/valuables/valuables_01.png`,
        alt: 'Screenshot of Jack Dorsey&apos;s first ever tweet sold on Valuables',
        width: 3024,
        height: 1890,
        isScreenshot: true,
      },
    ],
    year: '2021',
    medium: 'Product design',
  },
  {
    id: 2,
    title: 'abstract-DCGAN',
    tag: 'abstract-dcgan',
    thumbnail: `${S3_BUCKET_URL}/abstract-dcgan/abstract-dcgan_thumbnail.png`,
    content: [
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0100.png`,
        alt: '16x16 grid of images produced by abstract-DCGAN after 100 epochs of training',
        width: 600,
        height: 600,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0099.png`,
        alt: '16x16 grid of images produced by abstract-DCGAN after 99 epochs of training',
        width: 600,
        height: 600,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0100_landscape.png`,
        alt: '16x16 grid of images produced by DCGAN after 100 epochs of training on a dataset of landscape images',
        width: 600,
        height: 600,
      },
    ],
    year: '2020',
    medium: 'Deep Convolutional Generative Adversarial Network',
  },
  {
    id: 0,
    title: 'Visualize',
    tag: 'visualize',
    thumbnail: 'https://ng-web.s3.amazonaws.com/visualize/screenshot-01.png',
    content: [
      {
        type: 'video',
        src: `${S3_BUCKET_URL}/visualize/visualize_screen-recording.mov`,
        alt: 'Screen recording of Visualize program set to Frank Ocean&apos;s cover of At Your Best (You Are Love) by Aaliyah',
        width: 600,
        height: 600,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/visualize/screenshot-01.png`,
        alt: 'Still from Visualize program with an orange background and blue circle',
        width: 600,
        height: 600,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/visualize/screenshot-00.png`,
        alt: 'Still from Visualize program with a brown background and blue circle',
        width: 600,
        height: 600,
      },
    ],
    year: '2019',
    medium: 'Arduino, Processing',
  },
  {
    id: 1,
    title: 'Self Portrait',
    tag: 'self-portrait',
    thumbnail: `${S3_BUCKET_URL}/self-portrait/screenshot-00.png`,
    content: [
      {
        type: 'video',
        src: `${S3_BUCKET_URL}/self-portrait/processing-self-portrait_screen-recording.mov`,
        alt: 'Screen recording of Self Portrait where the mouse scrolls around the image and the corresponding texts display at the top.',
        width: 2560,
        height: 1454,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/self-portrait/Screenshot 2023-03-11 at 00.36.35.png`,
        alt: 'Still from Self Portrait with the text &ldquo;Hey its Nico&rdquo;',
        width: 2784,
        height: 1690,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/self-portrait/Screenshot 2023-03-11 at 00.38.22.png`,
        alt: 'Still from Self Portrait with the text &ldquo;How long does it take to grow&rdquo;',
        width: 2784,
        height: 1690,
      },
    ],
    year: '2019',
    medium: 'Processing',
  },
];

export default works;
