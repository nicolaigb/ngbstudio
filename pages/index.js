import React from 'react';
import {
  Layout, getLayoutArgs, HomePage, getHomePageArgs,
} from '@templates';

export default function Home() {
  return (
    <Layout {...getLayoutArgs()}>
      <HomePage {...getHomePageArgs()} />
    </Layout>
  );
}
