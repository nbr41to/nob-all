import type { Meta, StoryObj } from '@storybook/react';

import { Callout as Component } from './Callout';
import exampleBlock from './example.json';

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
