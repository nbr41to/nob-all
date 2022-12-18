import type { Meta, StoryObj } from '@storybook/react';

import exampleBlock from './example.json';

import { BulletedListItem as Component } from '.';

export default {
  component: Component,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock,
  },
};
