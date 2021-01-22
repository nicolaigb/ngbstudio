import React from 'react';
import { Story } from '@storybook/react';
import { Text } from '@atoms';
import { getMenuArgs } from '@molecules';
import { getHeaderArgs } from '@organisms';
import { Layout, ILayout } from './index';

export default {
  title: 'Templates/Layout',
};

export const getLayoutArgs = () => ({
  headerProps: getHeaderArgs(),
  menuProps: getMenuArgs(),
  children: <Text styleType="header">INFINITY AWAITS & Co.</Text>,
});
const Template: Story<ILayout> = (args) => <Layout {...args} />;
export const layout = Template.bind({});
layout.args = getLayoutArgs();
