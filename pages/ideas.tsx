import React from 'react';
import {
  Ideas, getIdeasArgs, Layout, getLayoutArgs,
} from '@templates';

const IdeasPage = () => (
  <Layout {...getLayoutArgs()}>
    <Ideas {...getIdeasArgs()} />
  </Layout>
);

export default IdeasPage;
