import React from 'react';
import { ContentData } from 'model';
import {
  AbstractDCGAN, CentPages, SelfPortrait, UpToUs, Valuables, Visualize,
} from './Works';

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
    case 'up-to-us':
      return <UpToUs content={content} />;
    case 'valuables':
      return <Valuables content={content} />;
    case 'abstract-dcgan':
      return <AbstractDCGAN content={content} />;
    case 'visualize':
      return <Visualize content={content} />;
    case 'self-portrait':
      return <SelfPortrait content={content} />;
    default:
      return <div />;
  }
};

export default WorkDescription;
