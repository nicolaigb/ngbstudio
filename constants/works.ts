/* eslint-disable no-multi-str */
import { Work } from 'model';

const works: Work[] = [
  {
    title: 'abstract-DCGAN',
    tag: 'abstract-dcgan',
    images: ['/images/abstract-dcgan/image_at_epoch_0100.png', '/images/abstract-dcgan/image_at_epoch_0099.png', '/images/abstract-dcgan/image_at_epoch_0100_landscape.png'],
    id: 2,
    year: '2020',
    medium: 'TensorFlow',
    description: '\
      <p>\
        A Deep Convolutional Generative Adversarial Network (DCGAN) trained to generate abstract artwork. The model is made up of two neural networks, the Generator and the Discriminator. The Generator takes data from the training set and learns to replicate it. The Discriminator takes an image and determines if it is real (from the training data) or fake (from the Generator). The Generator then learns from these decisions and takes another pass at creating new images. The two models continue this back and forth and, over time, the Generator improves to the point where it can create images that are nearly indeterminable from the images it is trained on. This method is best explained through the analogy of the Counterfeiter and the Police. As the Counterfeiter continues to print fake money, the Police get better at determining whether a bill is fake or not. In turn, the Counterfeiter learns to print fake money that the Police won\'t detect.\
      </p>\
      <p>\
        These types of Deep Learning models are typically used to generate figurative images like portraits, landscapes and still life. I thought it would be interesting to experiment with generating non-figurative work, specifically abstract artwork. I trained my model on a dataset of thousands of works from the likes of Jackson Pollock, Mark Rothko, Cy Twombly and others. As a sanity check, I separately trained the model on a dataset of landscape paintings.\
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
    title: 'Wavy Line',
    tag: 'wavy-line',
    images: ['/images/wavy-line/cant-grow-exclusively-from-anguish-we-must-cherish-every-moment.jpg'],
    id: 3,
    year: '2019',
    medium: 'Pen on paper',
    description: 'Lorem ipsum <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">HELLO</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi leo urna molestie at elementum eu facilisis. Vitae semper quis lectus nulla at volutpat. Justo laoreet sit amet cursus sit amet dictum sit. Vel pretium lectus quam id. Morbi leo urna molestie at elementum eu facilisis sed odio. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Turpis egestas maecenas pharetra convallis. Enim facilisis gravida neque convallis a. Sit amet mattis vulputate enim nulla. At tellus at urna condimentum mattis pellentesque id. Risus pretium quam vulputate dignissim suspendisse. In hendrerit gravida rutrum quisque non tellus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Enim nec dui nunc mattis enim ut tellus. Sagittis orci a scelerisque purus semper eget duis. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Nibh sed pulvinar proin gravida hendrerit lectus a. Lacus sed viverra tellus in hac habitasse platea. Pretium fusce id velit ut tortor. Malesuada fames ac turpis egestas. Nunc sed velit dignissim sodales. Molestie a iaculis at erat pellentesque adipiscing commodo.'
  },
  {
    title: 'Visualize',
    tag: 'visualize',
    images: ['/images/visualize/screenshot-01.png', '/images/visualize/screenshot-00.png'],
    id: 0,
    year: '2019',
    medium: 'Arduino, Processing',
    description: '',
  },
  {
    title: 'Self Portrait',
    tag: 'self-portrait',
    images: ['/images/self-portrait/screenshot-00.png', '/images/self-portrait/Screenshot 2023-03-11 at 00.36.35.png'],
    id: 1,
    year: '2019',
    medium: 'Processing',
    // eslint-disable-next-line no-useless-escape
    description: '<p>An interpretation of a \"self-portrait\" wherein I mapped my iMessage history to a screenshot of my screensaver at the time, each pixel representing one message. As the observer scrolled around the image, they would get an insight into my life based on my conversations at the time. I kept the directionality and the sender or receiver of the message anonymous.</p><p>As I exhibited the work, I noticed people were nervous to use it, presumably concerned with the level of exposure I was giving them.</p><p>The screensaver comes from <a href="https://cachemonet.com/" target="__blank">cachemonet</a> one of my favorite places on the web.</p>',
  },
];

export default works;
