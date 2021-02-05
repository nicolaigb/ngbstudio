import React, { ReactElement } from 'react';
// import { Image } from '@atoms';
import styled from 'styled-components';

export interface IMasonry extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Components to be displayed in Masonry format
   */
  children: ReactElement[];

  /**
   * Number of columns to hold children
   */
  columns: number;
}

export const Masonry: React.FC<IMasonry> = (
  {
    children,
    columns,
    ...props
  },
): ReactElement => {
  const buckets = {};
  // Fill columns with children
  // images.forEach((image, idx) => {
  //   const hash = idx % columns;
  //   const item = <SImage src={image} key={idx} />;
  //   buckets[hash] = buckets[hash] ? buckets[hash].concat([item]) : [item];
  // });
  children.forEach((child, idx) => {
    const hash = idx % columns;
    const item = <SItemContainer>{child}</SItemContainer>;
    buckets[hash] = buckets[hash] ? buckets[hash].concat([item]) : [item];
  });
  // Wrap columns in divs
  const cols = Object.keys(buckets)
    .map((col, idx) => <SColumnContainer key={idx}>{buckets[col]}</SColumnContainer>);
  return (
    <SMasonryContainer {...props}>
      {cols}
    </SMasonryContainer>
  );
};

const SMasonryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 ${({ theme }) => theme.Spacing.tight};
`;

// const SImage = styled(Image)`
//   width: 100%;
//   height: auto;
//   margin: ${({ theme }) => theme.Spacing.tight} 0;
// `;

const SItemContainer = styled.div`
  width: 100%;
  height: auto;
  margin: ${({ theme }) => theme.Spacing.tight} 0;
`;
