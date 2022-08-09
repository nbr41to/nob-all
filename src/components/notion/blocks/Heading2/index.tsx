import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: any;
};

export const Heading2: FC<Props> = ({ block }) => {
  return (
    <h2 className="text-xl">
      <RichText text={block.heading_2.rich_text} />
    </h2>
  );
};
