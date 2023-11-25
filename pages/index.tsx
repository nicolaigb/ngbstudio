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
  const [curWorkName, setCurWorkName] = useState(works[0].title);
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
      <STitleIndicatorContainer>
        <STitleIndicator styleType="emphasized">{curWorkName}</STitleIndicator>
      </STitleIndicatorContainer>
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

const STitleIndicatorContainer = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.Spacing.large}) {
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    padding: 16px;
  }
`;

const STitleIndicator = styled(Text)`
  display: inline-flex;
  max-width: unset;
  justify-content: center;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px) brightness(124%);
  border-radius: 500px;
  border: 1px solid #EEEEEE;
`;

export default Home;
