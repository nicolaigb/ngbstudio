import React from 'react';
import { GetServerSideProps } from 'next';
import { Masonry } from '@organisms';
import { Layout, getLayoutArgs } from '@templates';
import { MoodImage } from 'model';
import { getMoodImages } from '../api/index';

export const getServerSideProps: GetServerSideProps = async () => {
  const moodImages = await getMoodImages();
  console.log(moodImages);
  return {
    props: {
      moodImages,
    },
  };
};

interface IMood {
  moodImages: MoodImage[];
}

const Home = ({ moodImages }: IMood) => (
  <Layout {...getLayoutArgs()}>
    <Masonry
      columns={3}
      images={moodImages.map((moodImage) => moodImage.url)}
    />
  </Layout>
);

export default Home;
