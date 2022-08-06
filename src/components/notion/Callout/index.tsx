import type { FC } from 'react';

import { compiledText } from '../compiledText';

type Props = {
  block: any;
};

export const Callout: FC<Props> = ({ block }) => {
  const { emoji } = block.callout.icon;

  return (
    <div className="flex items-center gap-4 rounded border p-4">
      <div>{emoji}</div>
      <div>{compiledText(block.callout.text)}</div>
    </div>
  );
};
