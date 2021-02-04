import React from 'react';
import { Story } from '@storybook/react';
import { Text } from '@atoms';
import { getHeaderArgs } from '@organisms';
import { getMenuArgs } from '@molecules';
import { Layout, ILayout } from './index';

export default {
  title: 'Templates/Layout',
};

export const getLayoutArgs = () => ({
  headerProps: getHeaderArgs(),
  menuProps: getMenuArgs(),
  children: <Text styleType="header">INFINITY AWAITS & CO.</Text>,
});

const Template: Story<ILayout> = (args) => <Layout {...args} />;
export const layout = Template.bind({});
layout.args = getLayoutArgs();
