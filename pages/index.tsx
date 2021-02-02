import React from 'react';
import { GetServerSideProps } from 'next';
import {
  Layout, getLayoutArgs, HomePage, getHomePageArgs,
} from '@templates';
import { Work } from 'model';
import getWorks from '../api/index';

export const getServerSideProps: GetServerSideProps = async () => {
  const works = await getWorks();
  return {
    props: { works },
  };
};

interface IHome {
  works: Work[];
}

const Home = ({ works }: IHome) => (
  <Layout {...getLayoutArgs()}>
    <HomePage
      {...getHomePageArgs()}
      worksGridProps={{
        worksProps: works.map((work) => ({
          name: work.title,
          src: work.thumbnail,
        })),
      }}
    />
  </Layout>
);

export default Home;
