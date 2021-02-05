import React from 'react';
import { Image } from '@atoms';
import { Story } from '@storybook/react';
import { Masonry, IMasonry } from './index';

export default {
  title: 'Organisms/Masonry',
};

export const getMasonryArgs = () => ({
  // images: [
  //   'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/alphonse-mucha_1897.jpg',
  //   'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/albers_arctic-bloom.jpg',
  //   'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/black-line-drawing.jpg',
  //   'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/david-carson_ray-gun.png',
  //   'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/farnsworth-house.png',
  // ],
  children: [
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/alphonse-mucha_1897.jpg" />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/albers_arctic-bloom.jpg" />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/black-line-drawing.jpg" />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/david-carson_ray-gun.png" />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/farnsworth-house.png" />,
  ],
  columns: 3,
});

const Template: Story<IMasonry> = (args) => <Masonry {...args} />;
export const mosaic = Template.bind({});
mosaic.args = getMasonryArgs();
