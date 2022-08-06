import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const ToDo: FC<Props> = ({ block }) => {
  return (
    <li className="list-none">
      <input type="checkbox" checked={block.to_do.checked} disabled />
      <span className="ml-2">{compiledText(block.to_do.text)}</span>
    </li>
  );
};
