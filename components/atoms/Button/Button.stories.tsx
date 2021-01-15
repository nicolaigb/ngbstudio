import React from 'react';
import { Story } from '@storybook/react';
import { MdLanguage } from 'react-icons/md';
import styled from 'styled-components';
import { Button, IButton } from './index';

export default {
  title: 'Atoms/Button',
};

export const getButtonArgs = () => ({
  children: <SGlobe />,
});

const SGlobe = styled(MdLanguage).attrs(() => ({
  size: 24,
}))``;

const Template: Story<IButton> = (args) => <Button {...args} />;
export const button = Template.bind({});
button.args = getButtonArgs();
