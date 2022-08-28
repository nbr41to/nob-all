import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: any;
};

export const Heading3: FC<Props> = ({ block }) => {
  return (
    <h3 className="my-2 bg-slate-100 text-xl font-bold">
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};
