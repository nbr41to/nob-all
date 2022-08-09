import { BulletedListItem } from './blocks/BulletedListItem';
import { Callout } from './blocks/Callout';
import { Code } from './blocks/Code';
import { Heading1 } from './blocks/Heading1';
import { Heading2 } from './blocks/Heading2';
import { Heading3 } from './blocks/Heading3';
import { NumberedListItem } from './blocks/NumberedListItem';
import { Paragraph } from './blocks/Paragraph';
import { ToDo } from './blocks/ToDo';

export const blockToJsx = (block: any) => {
  const blockType = block.type;

  switch (blockType) {
    case 'paragraph':
      return <Paragraph block={block} />;
    case 'heading_1':
      return <Heading1 block={block} />;
    case 'heading_2':
      return <Heading2 block={block} />;
    case 'heading_3':
      return <Heading3 block={block} />;
    case 'callout':
      return <Callout block={block} />;
    case 'bulleted_list_item':
      return <BulletedListItem block={block} />;
    case 'numbered_list_item':
      return <NumberedListItem block={block} />;
    case 'to_do':
      return <ToDo block={block} />;
    case 'code':
      return <Code block={block} />;
    default:
      return <div>Not supported [type:{blockType || 'Unsupported!!'}]</div>;
  }
};
