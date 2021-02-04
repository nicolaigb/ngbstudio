import React from 'react';
import { Story } from '@storybook/react';
import { Mosaic, IMosaic } from './index';

export default {
  title: 'Organisms/Mosaic',
};

export const getMosaicArgs = () => ({
  images: [
    'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/albers_arctic-bloom.jpg',
    'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/alphonse-mucha_1897.jpg',
    'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/black-line-drawing.jpg',
    'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/david-carson_ray-gun.png',
    'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/farnsworth-house.png',
  ],
});
const Template: Story<IMosaic> = (args) => <Mosaic {...args} />;
export const mosaic = Template.bind({});
mosaic.args = getMosaicArgs();
