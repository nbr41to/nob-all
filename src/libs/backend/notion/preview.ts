import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_INTERNAL_INTEGRATION_TOKEN,
});

const samplePageId = process.env.SAMPLE_NOTION_BLOCKS_PAGE_ID;

export const getSampleNotionBlocks = async () => {
  if (!samplePageId) return [];
  const response = await notion.blocks.children.list({
    block_id: samplePageId,
  });

  return response.results;
};
