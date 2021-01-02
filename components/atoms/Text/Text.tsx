import React, { ReactElement } from "react";
import styled from "styled-components";

export interface IText extends React.HTMLAttributes<HTMLDivElement> {
  text: string,
};

export const Text: React.FC<IText> = ({
  children,
  ...props
}): ReactElement => {
  return <SText {...props}>text</SText>
};

const SText = styled.div``;
