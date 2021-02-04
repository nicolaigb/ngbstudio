import React, { ReactElement } from 'react';
import { Text, ExternalLink } from '@atoms';
import styled from 'styled-components';

interface IInformationLink {
  href: string;
  text: string;
}

export interface IInformationEntry extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Body text displayed at top of container
   */
  informationText: string;

  /**
   * Links displayed below text
   */
  informationLinks: IInformationLink[];
}

export const InformationEntry: React.FC<IInformationEntry> = (
  {
    informationText,
    informationLinks,
    ...props
  },
): ReactElement => (
  <SInformationEntryContainer {...props}>
    <SInformationText styleType="regular">{informationText}</SInformationText>
    {informationLinks.map((link, idx) => (
      <ExternalLink key={idx} href={link.href}>
        <SLinkText styleType="emphasized">{link.text}</SLinkText>
      </ExternalLink>
    ))}
  </SInformationEntryContainer>
);

const SInformationEntryContainer = styled.div``;

const SInformationText = styled(Text)`
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
`;

const SLinkText = styled(Text)`
  color: ${({ theme }) => theme.Colors.emphasis};
  margin-bottom: ${({ theme }) => theme.Spacing.wide};
`;
