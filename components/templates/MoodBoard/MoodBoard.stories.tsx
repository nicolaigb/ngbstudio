import React from 'react';
import { Story } from '@storybook/react';
import { MoodBoard, IMoodBoard } from './index';

export default {
  title: 'Templates/MoodBoard',
};

export const getMoodBoardArgs = () => ({
  images: [
    {
      title: 'Alphonse Mucha, 1897',
      url: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/alphonse-mucha_1897.jpg',
    },
    {
      title: 'Josed Albers, Arctic Bloom, 1965',
      url: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/albers_arctic-bloom.jpg',
    },
    {
      title: 'Nicolai Garcia, Black Line Drawing, 2019',
      url: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/black-line-drawing.jpg',
    },
    {
      title: 'David Carson, Ray Gun',
      url: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/david-carson_ray-gun.png',
    },
    {
      title: 'Ludwig Mies van der Rohe, Farnsworth House 1949-51',
      url: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/farnsworth-house.png',
    },
  ],
});
const Template: Story<IMoodBoard> = (args) => <MoodBoard {...args} />;
export const moodBoard = Template.bind({});
moodBoard.args = getMoodBoardArgs();
