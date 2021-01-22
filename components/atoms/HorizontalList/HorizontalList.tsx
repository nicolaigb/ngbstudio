import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IHorizontalList extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[]
}
export const HorizontalList: React.FC<IHorizontalList> = (
  {
    children,
    ...props
  },
): ReactElement => (
  <SHorizontalList {...props}>
    {children.map((item, idx) => <SItemContainer key={idx}>{item}</SItemContainer>)}
  </SHorizontalList>
);

const SHorizontalList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SItemContainer = styled.div`
  margin-right: ${({ theme }) => theme.Spacing.condensed};
`;
