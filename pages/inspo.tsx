import React from 'react';
import styled from 'styled-components';
import { DraggableImage } from '@molecules';
import { Layout } from '@templates';
import images from '@constants/inspoImages';

const Home = () => (
  <Layout>
    <SContainer>
      {
        images.map((img, idx) => (
          <DraggableImage data={img} key={`inspo-img-${idx}`} />
        ))
      }
    </SContainer>
  </Layout>
);

const SContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  align-items: center;
`;

export default Home;
