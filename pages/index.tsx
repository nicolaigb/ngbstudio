import React from 'react';
import {
  Grid,
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
      <Grid
        worksProps={
          works.map((work) => ({
            name: work.title,
            src: work.images[0],
            url: `/work/${work.tag}`,
          }))
        }
      />
    </Layout>
  </div>
);

export default Home;
