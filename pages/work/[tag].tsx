import React from 'react';
import {
  Layout, WorkDetail,
} from '@templates';
import { GetServerSideProps } from 'next';
import { Work } from 'model';
import WorksData from '@constants/works';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { tag } = query;
  const work = WorksData.filter((entry) => entry.tag === tag)[0];
  return {
    props: {
      work,
    },
  };
};

interface IWorkDetailPage {
  work: Work;
}

const WorkDetailPage = ({ work }: IWorkDetailPage) => (
  <Layout>
    <WorkDetail
      work={work}
    />
  </Layout>
);

export default WorkDetailPage;
