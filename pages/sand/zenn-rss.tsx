import type { InferGetStaticPropsType, NextPage } from 'next';

import Parser from 'rss-parser';

import { Zenn } from 'src/components/pages/Zenn';

export const getStaticProps = async () => {
  const parser = new Parser();
  const response = await parser.parseURL('https://zenn.dev/nbr41to/feed');
  const articles = response.items as ZennArticle[];

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
