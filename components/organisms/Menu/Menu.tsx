import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IMenu {
}
export const Menu: React.FC<IMenu> = (
  {
    ...props
  },
): ReactElement => (
  <SMenuContainer {...props} />
);
const SMenuContainer = styled.div``;
