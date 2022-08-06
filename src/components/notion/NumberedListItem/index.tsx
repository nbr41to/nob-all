import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const NumberedListItem: FC<Props> = ({ block }) => {
  return <li className="">{compiledText(block.numbered_list_item.text)}</li>;
};
