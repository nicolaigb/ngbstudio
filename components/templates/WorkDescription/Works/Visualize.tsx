import React from 'react';
import { ContentView } from '@molecules/ContentView';
import { IWork, SText } from './util';

export const Visualize = ({
  content,
}: IWork) => (
  <>
    <SText>
      This program flattens sound frequency into color. The frequency detected maps to the color of the center circle. The circle&apos;s size is determined by the amplitude of the sound wave, how loud it is. The background color is the negative of the foreground. Higher frequencies of sound translate to brighter colors and vise-versa. This one is set to Frank Ocean&apos;s cover of
      {' '}
      <i>At Your Best (You Are Love)</i>
      , by Aaliyah.
    </SText>
    <ContentView data={content[1]} />
    <ContentView data={content[2]} />
  </>
);
