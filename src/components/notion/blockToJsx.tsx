import type { FC } from 'react';

import { BulletedListItem } from './BulletedListItem';
import { Callout } from './Callout';
import { Heading1 } from './Heading1';
import { Heading2 } from './Heading2';
import { NumberedListItem } from './NumberedListItem';
import { Paragraph } from './Paragraph';
import { ToDo } from './ToDo';

type Props = {
  block: any;
};

export const blockToJsx: FC<Props> = ({ block }) => {
  const blockType = block.type;

  switch (blockType) {
    case 'paragraph':
      return <Paragraph block={block} />;
    case 'heading_1':
      return <Heading1 block={block} />;
    case 'heading_2':
      return <Heading2 block={block} />;
    case 'callout':
      return <Callout block={block} />;
    case 'bulleted_list_item':
      return <BulletedListItem block={block} />;
    case 'numbered_list_item':
      return <NumberedListItem block={block} />;
    case 'to_do':
      return <ToDo block={block} />;
    default:
      return <div>Not supported</div>;
  }
};
