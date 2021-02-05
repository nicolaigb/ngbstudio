import React from 'react';
import { Text } from '@atoms';
import { Story } from '@storybook/react';
import { Modal, IModal } from './index';

export default {
  title: 'Atoms/Modal',
};

export const getModalArgs = () => ({
  isOpen: false,
  children: <Text styleType="title">HELLO, WORLD!</Text>,
});
const Template: Story<IModal> = (args) => <Modal {...args} />;
export const modal = Template.bind({});
modal.args = getModalArgs();
