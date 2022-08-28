import { notion } from './client';

/* Pageのchildrenを取得 */
export const getBlockChildren = async (blockId: string, limit = 0) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: limit,
  });

  return response;
};
