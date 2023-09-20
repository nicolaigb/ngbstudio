import React from 'react';
import { ContentView } from '@molecules/ContentView';
import { IWork, SText } from './util';

export const Visualize = ({
  content,
}: IWork) => (
  <>
    <SText>
      This program flattens sound frequency into color with higher frequencies translate to brighter colors and vise-versa. The background color is the negative of the foreground. This one is set to Frank Ocean&apos;s cover of
      {' '}
      <i>At Your Best (You Are Love)</i>
      , by Aaliyah.
    </SText>
    <ContentView data={content[1]} />
    <ContentView data={content[2]} />
  </>
);
