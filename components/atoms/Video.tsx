import React from 'react';
import { ContentData } from 'model';

export interface IVideo {
  videoObj: ContentData;
}

export const Video = ({
  videoObj,
}: IVideo) => {
  const { src, width, height } = videoObj;
  return (
    <video
      width={width}
      height={height}
      autoPlay
      playsInline
      controls
      muted
      loop
    >
      <source src={src} />
    </video>
  );
};
