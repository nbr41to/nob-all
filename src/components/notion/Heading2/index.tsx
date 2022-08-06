import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const Heading2: FC<Props> = ({ block }) => {
  return <h2 className="text-xl">{compiledText(block.heading_2.text)}</h2>;
};
