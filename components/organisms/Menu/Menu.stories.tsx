import React from 'react';
import { Story } from '@storybook/react';
import { Text } from '@atoms';
import { Menu, IMenu } from './index';

export default {
  title: 'Organisms/Menu',
};

export const getMenuArgs = () => ({
  menuItemProps: [
    {
      styleType: 'subdued',
      href: 'https://blonded.co',
      children: <Text styleType="header">home</Text>,
    },
    {
      styleType: 'subdued',
      href: 'http://www.playboicarti.com/',
      children: <Text styleType="header">me</Text>,
    },
    {
      styleType: 'subdued',
      href: 'https://www.cryptovoxels.com/',
      children: <Text styleType="header">ideas</Text>,
    },
    {
      styleType: 'subdued',
      href: 'https://www.cryptovoxels.com/',
      children: <Text styleType="header">moooooood board</Text>,
    },
  ],
});

const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
