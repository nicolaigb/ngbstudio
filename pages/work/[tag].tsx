import React from 'react';
import { Text } from '@atoms';
import { Layout, getLayoutArgs } from '@templates';
import { GetServerSideProps } from 'next';
import { getWork } from 'api';
import { Work } from 'model';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { tag } = query;
  const work = await getWork(tag);
  return {
    props: {
      work,
    },
  };
};

interface IWorkDetail {
  work: Work;
}

const WorkDetail = ({ work }: IWorkDetail) => (
  <Layout {...getLayoutArgs()}>
    <Text styleType="title">{work.title}</Text>
  </Layout>
);

export default WorkDetail;
