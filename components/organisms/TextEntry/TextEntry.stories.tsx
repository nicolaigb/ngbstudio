import React from 'react';
import { Story } from '@storybook/react';
import { TextEntry, ITextEntry } from './index';

export default {
  title: 'Organisms/TextEntry',
};

export const getTextEntryArgs = () => ({
  title: 'Wavy Line',
  year: '2020',
  description: `some text about this work that spans a couple lines and is somewhat\
  informative of what happened here. Vague and cool, leave the reader like, woah.\
  Hopefully it takes the reader somewhere where they’re thinking about this and how\
  cool it is and then maybe they leave afterwards to go somewhere because they’re so\
  inspired now that they have seen this that they want to take like by the horns and\
  take matters into their own hands and go do something about it and make something and\
  say something is beautiful and have a delicious bite to eat because they realize that\
  beautify in the world is actually possible and not just a myth.\n
  Pen on paper
  /\\|\\//|\\|//|//||/\\|||`,
});
const Template: Story<ITextEntry> = (args) => <TextEntry {...args} />;
export const textEntry = Template.bind({});
textEntry.args = getTextEntryArgs();
