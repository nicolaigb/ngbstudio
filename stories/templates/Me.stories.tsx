import React from 'react';
import { Story } from '@storybook/react';
import { Me, IMe } from './index';

export default {
  title: 'Templates/Me',
};

export const getMeArgs = () => ({
  informationEntryProps: {
    informationText: `Some kind of filler text about me and what I do. Who I look up to, \
    role models. What I wanna do. What is my dream. What have I done. What is the \
    ideology behind my own work.
    I am passionate about the intersection between technology and creative expression, \
    exploring ways they inform and influence each other. Understanding these two ideals \
    gives way to creating medium-spanning and groundbreaking experiences that can scale \
    to thousands of visitors.
    ok just a
    couple more
    lines that would
    fill to the end of the box
    and that’s it`,
    informationLinks: [
      {
        href: 'https://www.instagram.com/galeo_00/',
        text: 'PERSONAL',
      },
      {
        href: 'https://www.instagram.com/procyonsdeath/',
        text: 'ARCHIVAL',
      },
    ],
  },
  contactHeader: '1-800-HIT-MY-LINE',
  emailEmoji: '💻',
  email: 'nicog98@gmail.com',
  phoneNumberEmoji: '📲',
  phoneNumber: '(510) 708-0077',
});
const Template: Story<IMe> = (args) => <Me {...args} />;
export const me = Template.bind({});
me.args = getMeArgs();
