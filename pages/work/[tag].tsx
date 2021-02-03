import React from 'react';
import {
  Layout, WorkDetail,
} from '@templates';
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

interface IWorkDetailPage {
  work: Work;
}

const WorkDetailPage = ({ work }: IWorkDetailPage) => (
  <Layout>
    <WorkDetail
      mainImage={work.images[0]}
      textEntryProps={{
        title: work.title,
        year: work.createdAt,
        description: work.description,
      }}
      images={work.images.slice(1)}
    />
  </Layout>
);

export default WorkDetailPage;
