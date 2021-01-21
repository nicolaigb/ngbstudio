import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IVerticalList extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
}

export const VerticalList: React.FC<IVerticalList> = (
  {
    children,
    ...props
  },
): ReactElement => (
  <SVerticalList {...props}>
    {children.map((item, idx) => <SItemContainer key={idx}>{item}</SItemContainer>)}
  </SVerticalList>
);

const SVerticalList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SItemContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.Spacing.tight};
`;
