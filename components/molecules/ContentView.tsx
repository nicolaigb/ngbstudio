import React from 'react';
import { Image, Video } from '@atoms';
import { ContentData } from 'model';
import styled from 'styled-components';

export interface IContentView extends React.HTMLAttributes<HTMLDivElement> {
  data: ContentData;

  marginBottom?: string;
}

export const ContentView = ({
  data,
  marginBottom = '64px',
  ...props
}: IContentView) => {
  const {
    type,
  } = data;

  const renderContent = () => {
    switch (type) {
      case 'image':
        return <Image imageObj={data} />;
      case 'video':
        return <Video videoObj={data} />;
      default:
        return null;
    }
  };

  return (
    <SContentViewContainer marginBottom={marginBottom} {...props}>
      {renderContent()}
    </SContentViewContainer>
  );
};

const SContentViewContainer = styled.div<{marginBottom?: string}>(({ marginBottom }) => `
  flex-grow: 1;
  margin-bottom: ${marginBottom};
`);
