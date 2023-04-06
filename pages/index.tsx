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

export default function Home({ works }: IHome) {
  return (
    <div>
      <Layout>
        <Grid
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
}
