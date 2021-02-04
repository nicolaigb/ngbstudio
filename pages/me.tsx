import React from 'react';
import {
  Layout, getLayoutArgs, Me, getMeArgs,
} from '@templates';

const MePage = () => (
  <Layout {...getLayoutArgs()}>
    <Me {...getMeArgs()} />
  </Layout>
);

export default MePage;
