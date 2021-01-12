import React from 'react';
import { Story } from '@storybook/react';
import wavy from 'assets/cant-grow-exclusively-from-anguish-unless-we-cherish-every-moment.jpg';
import { ContentPreview, IContentPreview } from './index';

export default {
  title: 'Molecules/ContentPreview',
};

export const getContentPreviewArgs = () => ({
  src: wavy,
  name: 'wavy line',
});
const Template: Story<IContentPreview> = (args) => <ContentPreview {...args} />;
export const contentPreview = Template.bind({});
contentPreview.args = getContentPreviewArgs();
