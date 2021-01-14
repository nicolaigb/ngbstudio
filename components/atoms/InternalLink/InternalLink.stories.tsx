import React from 'react';
import { Story } from '@storybook/react';
import { InternalLink, IInternalLink } from './index';

export default {
  title: 'Atoms/InternalLink',
};

export const getInternalLinkArgs = () => ({
  styleType: 'prominent',
  textProps: {
    styleType: 'header',
  },
  children: 'home',
  href: 'https://blonded.co/',
});
const Template: Story<IInternalLink> = (args) => <InternalLink {...args} />;
export const internalLink = Template.bind({});
internalLink.args = getInternalLinkArgs();
