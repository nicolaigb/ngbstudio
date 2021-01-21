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
  <SVerticalListContainer {...props}>
    <SItemContainer>
      {children}
    </SItemContainer>
  </SVerticalListContainer>
);

const SVerticalListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SItemContainer = styled.div`
  margin-bottom: 4px;
`;
