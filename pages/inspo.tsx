import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Layout } from '@templates';
import images from '@constants/inspoImages';
import Image from 'next/image';

const Inspo = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const { deltaY } = event;
      containerRef.current.scrollBy({
        top: 0,
        left: deltaY,
        behavior: 'auto',
      });
    };

    window.addEventListener('wheel', onWheel);

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <Layout>
      <SContainer ref={containerRef}>
        {
          images.map(({
            src, alt, width, height,
          }, idx) => (
            <SImage key={`Inspo_image-${idx}`} src={src} alt={alt} width={width} height={height} />
          ))
        }
      </SContainer>
    </Layout>
  );
};

const SContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.Spacing.small}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow-x: scroll;
    overscroll-behavior-y: none;
    gap: 16px;
    align-items: center;
    padding: 0 32px;
  }
`;

const SImage = styled(Image)`
  @media (max-width: ${({ theme }) => theme.Spacing.small}) {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }
`;

export default Inspo;
