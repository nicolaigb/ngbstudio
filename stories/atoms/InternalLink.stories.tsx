import React from 'react';
import { Text } from '@atoms/Text';
import { Story } from '@storybook/react';
import { InternalLink, IInternalLink } from './index';

export default {
  title: 'Atoms/InternalLink',
};

export const getInternalLinkArgs = () => ({
  styleType: 'prominent',
  children: <Text styleType="header">home</Text>,
  href: 'https://blonded.co/',
});
const Template: Story<IInternalLink> = (args) => <InternalLink {...args} />;
export const internalLink = Template.bind({});
internalLink.args = getInternalLinkArgs();
