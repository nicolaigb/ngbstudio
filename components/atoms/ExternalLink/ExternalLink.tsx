import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IExternalLink extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * Child text to be embedded in this link
   */
  children: ReactElement | ReactElement[];
}

export const ExternalLink: React.FC<IExternalLink> = (
  {
    children,
    ...props
  },
): ReactElement => (
  <SExternalLink target="_blank" {...props}>
    {children}
  </SExternalLink>
);

const SExternalLink = styled.a`
  color: ${({ theme }) => theme.Colors.emphasis};
`;
