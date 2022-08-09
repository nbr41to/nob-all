import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import exampleBlock from './example.json';

import { NumberedListItem } from '.';

export default {
  title: 'Notion Block/NumberedListItem',
  component: NumberedListItem,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof NumberedListItem>;

const Template: ComponentStory<typeof NumberedListItem> = (args) => (
  <NumberedListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: exampleBlock,
};
