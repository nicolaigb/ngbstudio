import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IExternalLink extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * URL this link points to
   */
  href: string;

  /**
   * Child text to be embedded in this link
   */
  children: ReactElement | ReactElement[];
}

export const ExternalLink: React.FC<IExternalLink> = (
  {
    href,
    children,
    ...props
  },
): ReactElement => (
  <SExternalLink target="_blank" href={href} {...props}>
    {children}
  </SExternalLink>
);

const SExternalLink = styled.a`
  color: ${({ theme }) => theme.Colors.emphasis};
`;
