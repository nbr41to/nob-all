import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const Paragraph: FC<Props> = ({ block }) => {
  return <p className="">{compiledText(block.paragraph.text)}</p>;
};
