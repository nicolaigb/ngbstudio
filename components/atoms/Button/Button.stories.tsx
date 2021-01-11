import React from 'react';
import { Story } from '@storybook/react';
import { Button, IButton } from './index';

export default {
  title: 'Atoms/Button',
};

export const getButtonArgs = () => ({
  children: 'Nico',
});
const Template: Story<IButton> = (args) => <Button {...args} />;
export const button = Template.bind({});
button.args = getButtonArgs();
