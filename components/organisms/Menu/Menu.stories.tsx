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
      styleType: 'regular',
      children: <Text styleType="subheader">Home</Text>,
    },
    {
      styleType: 'regular',
      children: <Text styleType="subheader">Me</Text>,
    },
    {
      styleType: 'regular',
      children: <Text styleType="subheader">Ideas</Text>,
    },
    {
      styleType: 'regular',
      children: <Text styleType="subheader">Moooooood Board</Text>,
    },
  ],
});

const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
