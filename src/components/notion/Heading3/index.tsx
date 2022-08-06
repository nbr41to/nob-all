import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const Heading3: FC<Props> = ({ block }) => {
  return <h3 className="text-xl">{compiledText(block.heading_3.text)}</h3>;
};
