import React from 'react';
import { GetServerSideProps } from 'next';
import {
  WorksGrid,
  Layout,
} from '@templates';

import { Work } from 'model';
import { getWorks } from '../api/index';

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
  <Layout>
    <WorksGrid
      worksProps={
        works.map((work) => ({
          name: work.title,
          src: work.thumbnail,
          url: `/work/${work.tag}`,
        }))
      }
    />
  </Layout>
);

export default Home;
