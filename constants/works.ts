/* eslint-disable no-multi-str */
import { Work } from 'model';

const S3_BUCKET_URL = 'https://ng-web.s3.amazonaws.com';

const works: Work[] = [
  {
    id: 2,
    title: 'abstract-DCGAN',
    tag: 'abstract-dcgan',
    thumbnail: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0100.png`,
    content: [
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0100.png`,
        alt: '16x16 grid of images produced by abstract-DCGAN after 100 epochs of training'
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0099.png`,
        alt: '16x16 grid of images produced by abstract-DCGAN after 99 epochs of training'
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0100_landscape.png`,
        alt: '16x16 grid of images produced by DCGAN after 100 epochs of training on a dataset of landscape images'
      },
    ],
    year: '2020',
    medium: 'Deep Convolutional Generative Adversarial Network',
    description: '\
      <p>\
        abstract-DCGAN is a deep learning model that uses a Deep Convolutional Generative Adversarial Network (DCGAN) architecture to generate abstract artwork. The model was trained on a large dataset of abstract artworks from the likes of Jackson Pollock, Mark Rothko, and Franz Kline.\
      </p>\
      <p>\
        The DCGAN model is a type of neural network that is specifically designed for generating images. It consists of two networks: a generator and a discriminator. The generator network takes a random noise vector as input and outputs an image, while the discriminator network tries to distinguish between real and generated images. The two networks are trained together in a process called adversarial training, where the generator tries to create fake data that looks as real as possible, while the discriminator tries to distinguish between real and fake data. The two networks are trained together in a loop. Over time, the generator learns to create more realistic images, while the discriminator improves at distinguishing between the real and fake (generated) images. Eventually, the generator is capable of creating the abstract artwork seen here.\
      </p>\
      <p>\
        DCGAN has become a popular choice for generating figurative artwork, such as realistic portraits, animals, and landscapes. However, my motive with the Abstract-DCGAN project was to work with art that breaks away from figuratism and explores the realm of abstraction. Abstraction in art involves creating non-representational images that explore the use of color, shape, and texture. In this spirit, my motive with abstract-DCGAN was to explore non-traditional methods of artistic expression—namely machine learning. Today, with the widespread accessibility to powerful artificial intelligence (Chat-GPT wrote this description), our traditional mediums and means of artwork will continue to be challenged and expanded.\
      </p>\
      <p>\
        This work was a part of my senior project for Stanford CS. I was supervised by Professor Ron Fedkiw.\
      </p>\
      <p>\
        <a href="https://github.com/nicog98/abstract-DCGAN" target="__blank">Github</a>\
      </p>\
      ',
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
        alt: 'Screen recording of Visualize program set to Frank Ocean\'s cover of At Your Best (You Are Love)'
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/visualize/screenshot-01.png`,
        alt: 'Still from Visualize program with an orange background and blue circle',
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/visualize/screenshot-00.png`,
        alt: 'Still from Visualize program with a brown background and blue circle',
      },
    ],
    year: '2019',
    medium: 'Arduino, Processing',
    description: '',
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
        alt: 'Screen recording of Self Portrait where the mouse scrolls around the image and the corresponding texts display at the top.'
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/self-portrait/Screenshot 2023-03-11 at 00.36.35.png`,
        alt: 'Still from Self Portrait with the text \"Hey its Nico\"'
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/self-portrait/Screenshot 2023-03-11 at 00.38.22.png`,
        alt: 'Still from Self Portrait with the text \"How long does it take to grow\"'
      },
    ],
    year: '2019',
    medium: 'Processing',
    // eslint-disable-next-line no-useless-escape
    description: '<p>An interpretation of a \"self-portrait\" wherein I mapped my iMessage history to a screenshot of my computer screensaver, each pixel representing one message. The top left pixel represents the first message in the history and the bottom right represents the last. As the observer scrolls around the image, the message at the mouse\'s position displays at the top.</p><p>As I exhibited the work, I noticed people were nervous to use it, presumably concerned with the level of exposure into my life.</p><p>The screensaver comes from <a href="https://cachemonet.com/" target="__blank">cachemonet</a> one of my favorite places on the web.</p>',
  },
];

export default works;
