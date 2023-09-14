import React from 'react';
import { ContentData } from 'model';
import { CentPages } from './Works/CentPages';

export interface IWorkDescription {
  tag: string
  content: ContentData[]
}

const WorkDescription = ({
  tag,
  content,
}: IWorkDescription) => {
  switch (tag) {
    case 'cent-pages':
      return <CentPages content={content} />;
    default:
      return <div />;
  }
};

export default WorkDescription;
