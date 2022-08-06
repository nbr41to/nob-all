import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import exampleBlock from './example.json';

import { BulletedListItem } from '.';

export default {
  title: 'Notion Block/BulletedListItem',
  component: BulletedListItem,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof BulletedListItem>;

const Template: ComponentStory<typeof BulletedListItem> = (args) => (
  <BulletedListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  block: exampleBlock,
};
