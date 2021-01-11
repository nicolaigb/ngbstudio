import React from 'react';
import { Story } from '@storybook/react';
import { Text } from '@atoms/Text';
import { Button, IButton } from './index';

export default {
  title: 'Atoms/Button',
};

export const getButtonArgs = () => ({
  children: <Text text="Nico" styleType="header" />,
});
const Template: Story<IButton> = (args) => <Button {...args} />;
export const button = Template.bind({});
button.args = getButtonArgs();
