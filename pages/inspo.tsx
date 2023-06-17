import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { DraggableImage } from '@molecules';
import Image from 'next/image';
import { Layout } from '@templates';
import images from '@constants/inspoImages';

const IMAGE_SLOT_WIDTH = 600;

const Home = () => {
  const [height, setHeight] = useState<number>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef !== null) {
      setHeight(containerRef.current.getBoundingClientRect().height);
    }
  }, [])

  const randomX = (idx: number) => (IMAGE_SLOT_WIDTH * idx) + Math.floor(Math.random() * IMAGE_SLOT_WIDTH);

  return (
    <Layout>
      <SContainer ref={containerRef}>
        {
          images.map((img, idx) => (
            <DraggableImage data={img} key={`inspo-img-${idx}`} />
          ))
        }
      </SContainer>
    </Layout>
  );
}

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

