import React from 'react';
import {
  WorksGrid,
  Layout,
} from '@templates';
import WorksData from '@constants/works';

import { Work } from 'model';

export async function getStaticProps() {
  return {
    props: { works: WorksData },
  };
}

interface IHome {
  works: Work[];
}

const Home = ({ works }: IHome) => (
  <div>
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
  </div>
);

export default Home;
