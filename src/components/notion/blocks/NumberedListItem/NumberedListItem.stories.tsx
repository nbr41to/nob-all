import type { Meta, StoryObj } from '@storybook/react';

import exampleBlock from './example.json';
import { NumberedListItem as Component } from './NumberedListItem';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock,
  },
};
