import React, { ReactElement } from "react";
import styled from "styled-components";
export interface IButton {
}
export const Button: React.FC<IButton> = (
  {
    ...props
  }
): ReactElement => {
  return (
    <SButtonContainer {...props}>
    </SButtonContainer>
  );
};
const SButtonContainer = styled.div``;
