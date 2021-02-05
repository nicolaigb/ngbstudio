import React from 'react';
import { Story } from '@storybook/react';
import { InformationEntry, IInformationEntry } from './index';

export default {
  title: 'Organisms/InformationEntry',
};

export const getInformationEntryArgs = () => ({
  informationText: 'Hello, World!',
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
});
const Template: Story<IInformationEntry> = (args) => <InformationEntry {...args} />;
export const informationEntry = Template.bind({});
informationEntry.args = getInformationEntryArgs();
