import React from 'react';
import { Story } from '@storybook/react';
import { InternalLink } from '@atoms';
import { Menu, IMenu } from './index';

export default {
  title: 'Organisms/Menu',
};

export const getMenuArgs = () => ({
  menuItemProps: [
    {
      styleType: 'regular',
      children: <InternalLink styleType="subdued" href="">Home</InternalLink>,
    },
    {
      styleType: 'regular',
      children: <InternalLink styleType="subdued" href="">Me</InternalLink>,
    },
    {
      styleType: 'regular',
      children: <InternalLink styleType="subdued" href="">Ideas</InternalLink>,
    },
    {
      styleType: 'regular',
      children: <InternalLink styleType="subdued" href="">Moooooood Board</InternalLink>,
    },
  ],
});

const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
