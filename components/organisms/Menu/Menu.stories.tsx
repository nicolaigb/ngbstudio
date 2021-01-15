import React from 'react';
import { Story } from '@storybook/react';
import { InternalLink, Text } from '@atoms';
import { Menu, IMenu } from './index';

export default {
  title: 'Organisms/Menu',
};

export const getMenuArgs = () => ({
  menuItemProps: [
    {
      styleType: 'regular',
      children: <InternalLink styleType="prominent" href="https://blonded.co"><Text styleType="header">home</Text></InternalLink>,
    },
    {
      styleType: 'regular',
      children: <InternalLink styleType="subdued" href="https://blonded.co"><Text styleType="header">home</Text></InternalLink>,
    },
    {
      styleType: 'regular',
      children: <InternalLink styleType="prominent" href="https://blonded.co"><Text styleType="header">home</Text></InternalLink>,
    },
    {
      styleType: 'regular',
      children: <InternalLink styleType="prominent" href="https://blonded.co"><Text styleType="header">home</Text></InternalLink>,
    },
  ],
});

const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
