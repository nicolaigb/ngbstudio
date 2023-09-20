import React from 'react';
import { ContentView } from '@molecules';
import { IWork, SText } from './util';

export const SelfPortrait = ({
  content,
}: IWork) => (
  <>
    <SText>
      <p>An interpretation of a &ldquo;self-portrait&rdquo; wherein I mapped my iMessage history to a screenshot of my computer screensaver, each pixel representing one message. The top left pixel represents the first message in the history and the bottom right represents the last. As the observer scrolls around the image, the message at the mouse&apos;s position displays at the top.</p>
      <p>As I exhibited the work, I noticed people were nervous to use it, presumably concerned with the level of exposure into my life.</p>
      <p>
        The screensaver comes from
        {' '}
        <a href="https://cachemonet.com/" target="__blank">cachemonet</a>
      </p>
    </SText>
    <ContentView data={content[1]} />
    <ContentView data={content[2]} />
  </>
);
