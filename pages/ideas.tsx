import React from 'react';
import {
  Ideas, getIdeasArgs, Layout,
} from '@templates';

const IdeasPage = () => (
  <Layout>
    <Ideas {...getIdeasArgs()} />
  </Layout>
);

export default IdeasPage;
