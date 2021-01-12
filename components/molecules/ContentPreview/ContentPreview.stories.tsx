import React from 'react';
import { Story } from '@storybook/react';
import { ContentPreview, IContentPreview } from './index';

export default {
  title: 'Molecules/ContentPreview',
};

export const getContentPreviewArgs = () => ({});
const Template: Story<IContentPreview> = (args) => <ContentPreview {...args} />;
export const contentPreview = Template.bind({});
contentPreview.args = getContentPreviewArgs();
