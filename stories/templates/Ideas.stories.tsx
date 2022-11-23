/* eslint-disable quotes */
import React from 'react';
import { Story } from '@storybook/react';
import { Ideas, IIdeas } from './index';

export default {
  title: 'Templates/Ideas',
};

export const getIdeasArgs = () => ({
  informationEntryProps: {
    informationText: `In my opinion, nothing is a finished product. There is always \
    room to grow and I love to get feedback on the work I’ve done. To extend this \
    experience and give you full transparency into my design process, here is the \
    link to the Figma behind this site. Leave me comments on things I can improve, \
    and maybe you’ll see them in future iterations of ng-web.`,
    informationLinks: [
      {
        href: 'https://www.figma.com/file/AbeYDDmRcT5Xs3AodifRtk/Portfolio-Website?node-id=214%3A6',
        text: 'FIGMA',
      },
    ],
  },
  figmaURL: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FAbeYDDmRcT5Xs3AodifRtk%2FPortfolio-Website%3Fnode-id%3D67%253A2',
});
const Template: Story<IIdeas> = (args) => <Ideas {...args} />;
export const ideas = Template.bind({});
ideas.args = getIdeasArgs();
