import React from 'react';
import { GetServerSideProps } from 'next';
// import {
//   WorksGrid,
//   Layout,
//   getLayoutArgs,
// } from '@templates';
// import styled from 'styled-components';
import styled from 'styled-components';
import { Image } from 'components/atoms';

import { Work } from 'model';
import { getWorks } from '../api/index';

export const getServerSideProps: GetServerSideProps = async () => {
  const works = await getWorks();
  return {
    props: { works },
  };
};

interface IHome {
  works: Work[];
}

const Home = ({ works }: IHome) => (
  // <Layout {...getLayoutArgs()}>
  //   <WorksGrid
  //     worksProps={
  //       works.map((work) => ({
  //         name: work.title,
  //         src: work.thumbnail,
  //         url: `/work/${work.tag}`,
  //       }))
  //     }
  //   />
  // </Layout>
  <SLIT src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/vlc-record-2021-07-18-02h27m21s-Lost+in+Translation.gif" />
);

const SLIT = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export default Home;
