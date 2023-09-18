import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Layout } from '@templates';
import images from '@constants/inspoItems';
import Image from 'next/image';
import { Playlist } from '@molecules/Playlist';

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
          images.map((item, idx) => {
            const {
              type, src, alt, width, height,
            } = item;
            switch (type) {
              case 'image': return (
                <SImage key={`Inspo_image-${idx}`} src={src} alt={alt} width={width} height={height} />
              );
              case 'playlist':
                return <Playlist playlistObj={item} />;
              default:
                return null;
            }
          })
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
