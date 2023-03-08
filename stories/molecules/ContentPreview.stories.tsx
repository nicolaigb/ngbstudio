import React from 'react';
import { Story } from '@storybook/react';
import { ContentPreview, IContentPreview } from './index';

export default {
  title: 'Molecules/ContentPreview',
};

export const getContentPreviewArgs = () => ({
  src: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/wavy-line/cant-grow-exclusively-from-anguish-we-must-cherish-every-moment.jpg',
  name: 'Wavy Line',
  url: 'http://localhost:3000/work/wavy-line',
});
const Template: Story<IContentPreview> = (args) => <ContentPreview {...args} />;
export const contentPreview = Template.bind({});
contentPreview.args = getContentPreviewArgs();
