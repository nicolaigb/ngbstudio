import React from 'react';
import {
  Layout,
  Me,
  getMeArgs,
} from '@templates';

const MePage = () => (
  <Layout>
    <Me {...getMeArgs()} />
  </Layout>
);

export default MePage;
