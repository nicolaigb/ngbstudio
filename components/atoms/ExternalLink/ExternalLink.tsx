import React, { ReactElement } from 'react';
import { Text, IText } from '@atoms';
import styled from 'styled-components';

export interface IExternalLink extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * Props to style the text in this link
   */
  textProps: IText

  /**
   * Child text to be embedded in this link
   */
  children: string;
}

export const ExternalLink: React.FC<IExternalLink> = (
  {
    textProps,
    children,
    ...props
  },
): ReactElement => (
  <SExternalLink target="_blank" {...props}>
    <SText {...textProps}>{children}</SText>
  </SExternalLink>
);

const SExternalLink = styled.a``;

const SText = styled(Text)`
  color: ${({ theme }) => theme.Colors.emphasis};
  ${SExternalLink}:hover & {
    color: ${({ theme }) => theme.Colors.text};
    background-color: ${({ theme }) => theme.Colors.emphasis};
  }
`;
