import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import Work from '@types';
import { Text } from '@atoms';
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
    images,
    title,
    year,
    medium,
    description,
  } = work;
  return (
    <SWorkDetailContainer {...props}>
      <SImageContainer>
        <Image src={images[0]} layout="fill" objectFit="contain" />
      </SImageContainer>
      <SBody>
        <SHeader>
          <Text styleType="subheader">{title}</Text>
          <Text styleType="emphasized">{year}</Text>
          <Text styleType="regular" style={{ fontStyle: 'italic' }}>{medium}</Text>
        </SHeader>
        <SDescription styleType="regular" dangerouslySetInnerHTML={{ __html: description }} />
      </SBody>
      {
        images.slice(1).map((image, idx) => (
          <SImageContainer key={`image-${idx}`}>
            <Image src={image} layout="fill" objectFit="contain" />
          </SImageContainer>
        ))
      }
    </SWorkDetailContainer>
  );
};

const SWorkDetailContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const SBody = styled.div`
  margin: ${({ theme }) => theme.Spacing.wide} 0;
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
