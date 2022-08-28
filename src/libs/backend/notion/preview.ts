import { notion } from './client';

const samplePageId = process.env.SAMPLE_NOTION_BLOCKS_PAGE_ID;

export const getSampleNotionBlocks = async () => {
  if (!samplePageId) return [];
  const response = await notion.blocks.children.list({
    block_id: samplePageId,
  });

  return response.results;
};
// https://www.notion.so/nobco/9079e0cafd0643c58051b83e04c16ca4?v=654bb5966d9740dc8c7723aed680986e
