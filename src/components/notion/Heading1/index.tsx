import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const Heading1: FC<Props> = ({ block }) => {
  return <h1 className="text-2xl">{compiledText(block.heading_1.text)}</h1>;
};
