import React from 'react';
import { Story } from '@storybook/react';
import { Text } from '@atoms';
import { Menu, IMenu } from './index';

export default {
  title: 'Molecules/Menu',
};

export const getMenuArgs = () => ({
  menuItemProps: [
    {
      styleType: 'subdued',
      href: 'https://blonded.co',
      children: <Text styleType="subheader">home</Text>,
    },
    {
      styleType: 'subdued',
      href: 'http://www.playboicarti.com/',
      children: <Text styleType="subheader">me</Text>,
    },
    {
      styleType: 'subdued',
      href: 'https://www.cryptovoxels.com/',
      children: <Text styleType="subheader">ideas</Text>,
    },
    {
      styleType: 'subdued',
      href: 'https://www.cryptovoxels.com/',
      children: <Text styleType="subheader">moooooood board</Text>,
    },
  ],
});

const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
