import React from 'react';
import { Image, Text } from '@atoms';
import { IWork, SText } from './util';

export const Visualize = ({
  content,
}: IWork) => (
  <>
    <SText>
      Sound visualization
    </SText>
    <Image imageObj={content[1]} />
    <Image imageObj={content[2]} />
  </>
);
