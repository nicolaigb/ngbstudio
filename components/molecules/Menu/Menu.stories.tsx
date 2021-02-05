import React from 'react';
import { Story } from '@storybook/react';
import { Menu, IMenu } from './index';

export default {
  title: 'Molecules/Menu',
};

export const getMenuArgs = () => ({
  menuItems: [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/me',
      text: 'Me',
    },
    {
      href: '/ideas',
      text: 'Ideas',
    },
    {
      href: '/mood',
      text: 'Moooood',
    },
  ],
});

const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
