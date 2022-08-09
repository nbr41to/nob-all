import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: any;
};

export const Heading1: FC<Props> = ({ block }) => {
  return (
    <h1 className="text-2xl">
      <RichText text={block.heading_1.rich_text} />
    </h1>
  );
};
