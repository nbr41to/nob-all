import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { TopLinkButton } from '.';

export default {
  title: 'UI/TopLinkButton',
  component: TopLinkButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof TopLinkButton>;

const Template: ComponentStory<typeof TopLinkButton> = (args) => (
  <TopLinkButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Profile',
};
