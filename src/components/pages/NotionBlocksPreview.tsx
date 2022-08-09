import type { FC } from 'react';

import { Tabs } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { MdPreview, MdCode } from 'react-icons/md';

import { blockToJsx } from '../notion/blockToJsx';

type Props = {
  blocks: any[];
};

export const NotionBlocksPreview: FC<Props> = ({ blocks }) => {
  return (
    <div className="space-y-8 px-16">
      {blocks.map((block) => {
        /* // から始まるparagraphを非表示にする（独自ルール） */
        if (block?.paragraph?.rich_text[0]?.plain_text?.substr(0, 2) === '//')
          return null;

        return (
          <div key={block} className="">
            <h2 id="">type: {block.type}</h2>
            <Tabs variant="outline" defaultValue="preview">
              <Tabs.List>
                <Tabs.Tab value="preview" icon={<MdPreview size={14} />}>
                  Preview
                </Tabs.Tab>
                <Tabs.Tab value="json" icon={<MdCode size={14} />}>
                  JSON
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="preview">
                <div className="rounded-b border-r border-b border-l p-4">
                  {blockToJsx(block)}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="json">
                <div className="rounded-b border-r border-b border-l p-4">
                  <Prism language="json" colorScheme="dark">
                    {JSON.stringify(block, null, 2)}
                  </Prism>
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        );
      })}
    </div>
  );
};
