import React from 'react';
import { Story } from '@storybook/react';
import { Menu, IMenu } from './index';

export default {
  title: 'Organisms/Menu',
};

export const getMenuArgs = () => ({});
const Template: Story<IMenu> = (args) => <Menu {...args} />;
export const menu = Template.bind({});
menu.args = getMenuArgs();
