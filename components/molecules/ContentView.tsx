import React from 'react';
import { Image, Video } from '@atoms';
import { ContentData } from 'model';

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  data: ContentData;
}

export const ContentView = ({
  data,
}: IContentView) => {
  const { type } = data;
  return (type === 'image' ? (
    <Image
      imageObj={data}
    />
  ) : (
    <Video
      videoObj={data}
    />
  ));
};
