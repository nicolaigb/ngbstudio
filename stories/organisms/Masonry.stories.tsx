import React from 'react';
import Image from 'next/image';
import { Story } from '@storybook/react';
import { Masonry, IMasonry } from '@organisms/Masonry';

export default {
  title: 'Organisms/Masonry',
};

export const getMasonryArgs = () => ({
  children: [
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/alphonse-mucha_1897.jpg" width={100} height={100} />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/albers_arctic-bloom.jpg" width={100} height={100} />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/black-line-drawing.jpg" width={100} height={100} />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/david-carson_ray-gun.png" width={100} height={100} />,
    <Image src="https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/mood-board/farnsworth-house.png" width={100} height={100} />,
  ],
  columns: 3,
});

const Template: Story<IMasonry> = (args) => <Masonry {...args} />;
export const mosaic = Template.bind({});
mosaic.args = getMasonryArgs();
