import type { InferGetStaticPropsType, NextPage } from 'next';

import { Zenn } from 'src/components/pages/Zenn';
import { getZennArticles } from 'src/libs/backend/rss-parser';

export const getStaticProps = async () => {
  const articles = await getZennArticles();

  return {
    props: {
      articles,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ZennPage: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      <Zenn articles={articles} />
    </div>
  );
};

export default ZennPage;
