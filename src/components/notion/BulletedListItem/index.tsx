import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const BulletedListItem: FC<Props> = ({ block }) => {
  return <li className="">{compiledText(block.bulleted_list_item.text)}</li>;
};
