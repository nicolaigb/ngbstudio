import React, { ReactElement } from 'react';
import { IInformationEntry, InformationEntry } from '@organisms';
import styled from 'styled-components';

export interface IIdeas extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Props for information entry displayed at top
   */
  informationEntryProps: IInformationEntry;

  /**
   * Link to embedded Figma file
   */
  figmaURL: string;
}

export const Ideas: React.FC<IIdeas> = (
  {
    informationEntryProps,
    figmaURL,
    ...props
  },
): ReactElement => (
  <SIdeasContainer {...props}>
    <InformationEntry {...informationEntryProps} />
    <SFigmaEmbed
      title="figma"
      src={figmaURL}
      allowFullScreen
    />
  </SIdeasContainer>
);

const SIdeasContainer = styled.div``;

const SFigmaEmbed = styled.iframe`
  width: 800px;
  height: 450px;
  align-self: center;
`;
