import React from 'react';
import { Story } from '@storybook/react';
import { IImageModal, ImageModal } from './index';

export default {
  title: 'Organisms/MoodImageModal',
};

export const getImageModalArgs = () => ({
  isOpen: false,
  image: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/alphonse-mucha_1897.jpg',
  text: 'Josef Albers, Arctic Bloom, 1965',
});
const Template: Story<IImageModal> = (args) => <ImageModal {...args} />;
export const imageModal = Template.bind({});
imageModal.args = getImageModalArgs();
