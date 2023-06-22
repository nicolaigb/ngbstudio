import React, { ReactElement } from 'react';
import { Work } from 'model';
import { Text } from '@atoms';
import { ContentView } from '@molecules';
import styled from 'styled-components';

export interface IWorkDetail extends React.HTMLAttributes<HTMLDivElement> {
  work: Work;
}

export const WorkDetail: React.FC<IWorkDetail> = (
  {
    work,
    ...props
  },
): ReactElement => {
  const {
    content,
    title,
    year,
    medium,
    description,
  } = work;
  return (
    <SWorkDetailContainer {...props}>
      <ContentView data={content[0]} />
      <SBody>
        <SHeader>
          <Text styleType="subheader">{title}</Text>
          <Text styleType="emphasized">{year}</Text>
          <Text styleType="regular" style={{ fontStyle: 'italic' }}>{medium}</Text>
        </SHeader>
        <SDescription styleType="regular" dangerouslySetInnerHTML={{ __html: description }} />
      </SBody>
      {
        content.slice(1).map((data, idx) => (
          <ContentView data={data} key={idx} />
        ))
      }
    </SWorkDetailContainer>
  );
};

const SWorkDetailContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.Spacing.wide};
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SBody = styled.div`
  width: 100%;
  max-width: 800px;
`;

const SHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.Spacing.tight};
  margin-bottom: ${({ theme }) => theme.Spacing.regular};
`;

const SDescription = styled(Text)`
  a {
    text-decoration: underline;
  }
`;
