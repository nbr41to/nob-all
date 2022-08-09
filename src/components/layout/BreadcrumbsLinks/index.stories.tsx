import type { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';

import { BreadcrumbsLinks } from '.';

export default {
  title: 'UI/BreadcrumbsLinks',
  component: BreadcrumbsLinks,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof BreadcrumbsLinks>;

const Template: ComponentStory<typeof BreadcrumbsLinks> = (args) => (
  <BreadcrumbsLinks {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Home',
      href: '#',
    },
    {
      title: 'Blog',
      href: '#',
    },
    {
      title: 'Lets talk about React',
      href: '#',
    },
  ],
};
