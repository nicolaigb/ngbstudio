import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IButton {
}
export const Button: React.FC<IButton> = (
  {
    ...props
  },
): ReactElement => (
  <SButtonContainer {...props} />
);
const SButtonContainer = styled.div``;
