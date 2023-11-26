import React from 'react'
import { ContentView } from '@molecules/ContentView'
import { IWork, SText } from './util'

export const AbstractDCGAN = ({ content }: IWork) => (
  <>
    <SText>
      <p>
        abstract-DCGAN is a deep learning model that uses a Deep Convolutional
        Generative Adversarial Network (DCGAN) architecture to generate abstract
        artwork. The model was trained on a large dataset of abstract artworks
        from the likes of Jackson Pollock, Mark Rothko, and Franz Kline.
      </p>
      <p>
        The DCGAN model is a type of neural network that is specifically
        designed for generating images. It consists of two networks: a generator
        and a discriminator. The generator network takes a random noise vector
        as input and outputs an image, while the discriminator network tries to
        distinguish between real and generated images. The two networks are
        trained together in a process called adversarial training, where the
        generator tries to create fake data that looks as real as possible,
        while the discriminator tries to distinguish between real and fake data.
        The two networks are trained together in a loop. Over time, the
        generator learns to create more realistic images, while the
        discriminator improves at distinguishing between the real and fake
        (generated) images. Eventually, the generator is capable of creating the
        abstract artwork seen here.
      </p>
      <p>
        DCGAN has become a popular choice for generating figurative artwork,
        such as realistic portraits, animals, and landscapes. However, my motive
        with the Abstract-DCGAN project was to work with art that breaks away
        from figuratism and explores the realm of abstraction. Abstraction in
        art involves creating non-representational images that explore the use
        of color, shape, and texture. In this spirit, my motive with
        abstract-DCGAN was to explore non-traditional methods of artistic
        expression—namely machine learning. Today, with the widespread
        accessibility to powerful artificial intelligence (Chat-GPT wrote this
        description), our traditional mediums and means of artwork will continue
        to be challenged and expanded.
      </p>
      <p>
        This work was a part of my senior project for Stanford CS. I was
        supervised by Professor Ron Fedkiw.
      </p>
      <p>
        <a href="https://github.com/nicog98/abstract-DCGAN" target="__blank">
          Github
        </a>
      </p>
    </SText>
    <ContentView data={content[1]} />
    <ContentView data={content[2]} />
  </>
)
