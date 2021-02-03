import React, { ReactElement } from 'react';
import { Text } from '@atoms';
import styled from 'styled-components';

export interface ITextEntry extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title of this text entry
   */
  title: string;

  /**
   * Year of this text entry
   */
  year: string;

  /**
   * Description to be placed in the body of the text
   */
  description: string;
}

export const TextEntry: React.FC<ITextEntry> = (
  {
    title,
    year,
    description,
    ...props
  },
): ReactElement => (
  <STextEntryContainer {...props}>
    <SHeader>
      <Text styleType="header">{title}</Text>
      <Text styleType="subheader">{year}</Text>
    </SHeader>
    <Text styleType="regular">{description}</Text>
  </STextEntryContainer>
);

const STextEntryContainer = styled.div``;

const SHeader = styled.div``;
