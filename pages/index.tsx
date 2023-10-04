import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { isTopOfViewport } from '@utils/util';
import {
  Grid,
  Layout,
} from '@templates';
import WorksData from '@constants/works';

import { Work } from 'model';
import { InternalLink, Text } from '@atoms';
import { ContentPreview } from '@molecules';

export async function getStaticProps() {
  return {
    props: { works: WorksData },
  };
}

interface IHome {
  works: Work[];
}

const Home = ({ works }: IHome) => {
  const [curWorkName, setCurWorkName] = useState('');
  const workRefs: React.RefObject<HTMLDivElement>[] = Array.from({ length: works.length }, () => useRef(null));

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 850) {
        workRefs.forEach((ref, idx) => {
          if (ref.current && isTopOfViewport(ref.current)) {
            setCurWorkName(works[idx].title);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, workRefs.map((ref) => ref.current));

  return (
    <div>
      <SLayout>
        <Grid>
          {
            works.map((work, idx) => (
              <SContentPreviewContainer key={`ContentPreview_${idx}`} ref={workRefs[idx]}>
                <InternalLink href={`/work/${work.tag}`}>
                  <ContentPreview
                    key={`ContentPreview_${idx}`}
                    name={work.title}
                    src={work.thumbnail}
                  />
                </InternalLink>
              </SContentPreviewContainer>
            ))
          }
        </Grid>
      </SLayout>
      <SCurrentWorkTitle>{curWorkName}</SCurrentWorkTitle>
    </div>
  );
};

const SLayout = styled(Layout)`
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    padding-bottom: calc(100vh - 300px);
  }
`;

const SContentPreviewContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  position: relative;

  a {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  a:focus-visible {
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
    border-radius: 1px;
  }
`;

const SCurrentWorkTitle = styled(Text)`
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 16px 32px;
    background-color: white;
  }
`;

export default Home;
