import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IHorizontalList extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement | ReactElement[]
}
export const HorizontalList: React.FC<IHorizontalList> = (
  {
    ...props
  },
): ReactElement => (
  <SHorizontalList {...props} />
);
const SHorizontalList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
