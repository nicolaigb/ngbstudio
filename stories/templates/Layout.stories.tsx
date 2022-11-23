import React from 'react';
import { Story } from '@storybook/react';
import { Layout, ILayout } from './index';

export default {
  title: 'Templates/Layout',
};

const Template: Story<ILayout> = (args) => <Layout {...args} />;
export const layout = Template.bind({});
