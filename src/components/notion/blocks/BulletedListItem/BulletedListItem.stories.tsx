import type { Meta, StoryObj } from '@storybook/react';

import { BulletedListItem as component } from './BulletedListItem';
import exampleBlock from './example.json';

export default { component } as Meta<typeof component>;

export const Default: StoryObj<typeof component> = {
  args: {
    block: exampleBlock,
  },
};
