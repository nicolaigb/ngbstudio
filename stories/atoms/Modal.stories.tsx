import React from 'react';
import { Story } from '@storybook/react';
import { Text } from '@atoms/Text';
import { Modal, IModal } from '@atoms/Modal';

export default {
  title: 'Atoms/Modal',
};

export const getModalArgs = () => ({
  isOpen: false,
});
const Template: Story<IModal> = (args) => (
  <Modal {...args}>
    <Text styleType="header">Modal vibes</Text>
  </Modal>
);

export const modal = Template.bind({});
modal.args = getModalArgs();
