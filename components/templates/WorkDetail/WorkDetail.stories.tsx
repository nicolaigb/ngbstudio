import React from 'react';
import { getTextEntryArgs } from '@organisms';
import { Story } from '@storybook/react';
import { WorkDetail, IWorkDetail } from './index';

export default {
  title: 'Templates/WorkDetail',
};

export const getWorkDetailArgs = () => ({
  textEntryProps: getTextEntryArgs(),
  mainImage: 'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/wavy-line/cant-grow-exclusively-from-anguish-we-must-cherish-every-moment.jpg',
  images: [
    'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/wavy-line/cant-grow-exclusively-from-anguish-we-must-cherish-every-moment.jpg',
    'https://elasticbeanstalk-us-east-1-574094957622.s3.amazonaws.com/images/wavy-line/untitled_2018-11-02.jpg',
  ],
});
const Template: Story<IWorkDetail> = (args) => <WorkDetail {...args} />;
export const workDetail = Template.bind({});
workDetail.args = getWorkDetailArgs();
