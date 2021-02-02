import React from 'react';
import { Story } from '@storybook/react';
import { Menu, IMenu } from './index';

export default {
  title: 'Molecules/Menu',
};

export const getMenuArgs = () => ({
  menuItems: [
    {
      href: 'https://blonded.co',
      text: 'Home',
    },
    {
      href: 'http://www.playboicarti.com/',
      text: 'Me',
    },
    {
      href: 'https://www.beta.cent.co/',
      text: 'Ideas',
    },
    {
      href: 'https://www.cryptovoxels.com/',
      text: 'Moooooood Board',
    },
  ],
});

const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
