import type { InferGetStaticPropsType, NextPage } from 'next';

import { NotionBlocksPreview } from 'src/components/pages/NotionBlocksPreview';
import { getSampleNotionBlocks } from 'src/libs/backend/notion/preview';

export const getStaticProps = async () => {
  const blocks = await getSampleNotionBlocks();

  return {
    props: {
      blocks,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const NotionBlocksPreviewPage: NextPage<Props> = ({ blocks }) => {
  return (
    <div>
      <NotionBlocksPreview blocks={blocks} />
    </div>
  );
};

export default NotionBlocksPreviewPage;
