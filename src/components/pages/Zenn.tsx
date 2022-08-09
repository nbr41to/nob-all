import type { FC } from 'react';

import { Accordion } from '@mantine/core';
import { Prism } from '@mantine/prism';
import Image from 'next/image';

type Props = {
  articles: ZennArticle[];
};

export const Zenn: FC<Props> = ({ articles }) => {
  return (
    <div>
      <h1 className="text-center">Zennの最新記事一覧</h1>
      <Accordion>
        <Accordion.Item value="zenn-rss">
          <Accordion.Control>Zennの記事一覧をRSSで取得する</Accordion.Control>
          <Accordion.Panel>
            <p>rss-parserのインストール</p>
            <Prism language="tsx" colorScheme="dark" radius="md">
              yarn add rss-parser
            </Prism>
            <p>Next.jsのgetStaticPropsでこんな感じで使えばOK</p>
            <Prism
              language="tsx"
              colorScheme="dark"
              radius="md"
            >{`import Parser from 'rss-parser';

export const getStaticProps = async () => {
  const parser = new Parser();
  const response = await parser.parseURL('https://zenn.dev/nbr41to/feed');
  const articles = response.items as ZennArticle[];
  
  return {
    props: {
      articles,
    },
  };
};`}</Prism>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <div className="flex flex-wrap justify-center gap-6">
        {articles.map((article) => (
          <div key={article.link} className="rounded-md shadow">
            <h3 className="hidden">{article.title}</h3>
            <a
              className="relative block h-[168px] w-80 transition-transform duration-300 hover:scale-110"
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-md"
                src={article.enclosure.url}
                alt={article.title}
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
