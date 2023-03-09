import React from 'react';
import { Text } from '@atoms/Text';
import { Story } from '@storybook/react';
import { ExternalLink, IExternalLink } from '@atoms/ExternalLink';

export default {
  title: 'Atoms/ExternalLink',
};

export const getExternalLinkArgs = () => ({
  children: <Text styleType="header">HELLO, BLONDED!</Text>,
  href: 'https://blonded.co',
});
const Template: Story<IExternalLink> = (args) => <ExternalLink {...args} />;
export const externalLink = Template.bind({});
externalLink.args = getExternalLinkArgs();
