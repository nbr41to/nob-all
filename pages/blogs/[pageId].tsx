import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import type { ParsedUrlQuery } from 'node:querystring';

import { blockToJsx } from 'src/components/notion/blockToJsx';
import { getBlockChildren } from 'src/libs/backend/notion/getBlogDetail';
import { getBlogPosts } from 'src/libs/backend/notion/getPosts';

type Props = {
  post: any;
};
type Params = ParsedUrlQuery & {
  pageId: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const pageId = params?.pageId;
  if (!pageId) return { props: { post: null } };

  /* ここでNotionから記事を取得 */
  const post = await getBlockChildren(pageId);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => ({ params: { pageId: post.id } }));

  return {
    paths,
    fallback: false,
  };
};

const Blogs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  post,
}) => {
  const children = post.results;

  return (
    <div>
      <h1>Blog Detail</h1>
      <div>{children.map((child: any) => blockToJsx(child))}</div>
    </div>
  );
};

export default Blogs;
