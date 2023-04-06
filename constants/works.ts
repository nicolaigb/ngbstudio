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
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0099.png`,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/abstract-dcgan/image_at_epoch_0100_landscape.png`,
      },
    ],
    year: '2020',
    medium: 'TensorFlow',
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
    id: 3,
    title: 'Wavy Line',
    tag: 'wavy-line',
    thumbnail: `${S3_BUCKET_URL}/wavy-line/wavy-line-thumbnail.png`,
    content: [
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/wavy-line/cant-grow-exclusively-from-anguish-we-must-cherish-every-moment.jpg`,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/wavy-line/untitled_2018-11-02.jpg`,
      },
    ],
    year: '2019',
    medium: 'Pen on paper',
    description: 'Lorem ipsum <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">HELLO</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Vitae semper quis lectus nulla at volutpat. Justo laoreet sit amet cursus sit amet dictum sit. Vel pretium lectus quam id. Morbi leo urna molestie at elementum eu facilisis sed odio. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Turpis egestas maecenas pharetra convallis. Enim facilisis gravida neque convallis a. Sit amet mattis vulputate enim nulla. At tellus at urna condimentum mattis pellentesque id. Risus pretium quam vulputate dignissim suspendisse. In hendrerit gravida rutrum quisque non tellus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Enim nec dui nunc mattis enim ut tellus. Sagittis orci a scelerisque purus semper eget duis. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Nibh sed pulvinar proin gravida hendrerit lectus a. Lacus sed viverra tellus in hac habitasse platea. Pretium fusce id velit ut tortor. Malesuada fames ac turpis egestas. Nunc sed velit dignissim sodales. Molestie a iaculis at erat pellentesque adipiscing commodo.'
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
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/visualize/screenshot-01.png`,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/visualize/screenshot-00.png`,
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
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/self-portrait/Screenshot 2023-03-11 at 00.36.35.png`,
      },
      {
        type: 'image',
        src: `${S3_BUCKET_URL}/self-portrait/Screenshot 2023-03-11 at 00.38.22.png`,
      },
    ],
    year: '2019',
    medium: 'Processing',
    // eslint-disable-next-line no-useless-escape
    description: '<p>An interpretation of a \"self-portrait\" wherein I mapped my iMessage history to a screenshot of my computer screensaver, each pixel representing one message. The top left pixel represents the first message in the history and the bottom right represents the last. As the observer scrolls around the image, the message at the mouse\'s position displays at the top.</p><p>As I exhibited the work, I noticed people were nervous to use it, presumably concerned with the level of exposure into my life.</p><p>The screensaver comes from <a href="https://cachemonet.com/" target="__blank">cachemonet</a> one of my favorite places on the web.</p>',
  },
];

export default works;
