import React from 'react';
import { Story } from '@storybook/react';
import { MoodImageModal, IMoodImageModal } from './index';

export default {
  title: 'Organisms/MoodImageModal',
};

export const getMoodImageModalArgs = () => ({
  isOpen: false,
  image: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/alphonse-mucha_1897.jpg',
  text: 'Josef Albers, Arctic Bloom, 1965',
});
const Template: Story<IMoodImageModal> = (args) => <MoodImageModal {...args} />;
export const moodImageModal = Template.bind({});
moodImageModal.args = getMoodImageModalArgs();
