import type { InferGetStaticPropsType, NextPage } from 'next';

import { BlogItem } from 'src/components/ui/BlogItem';
import { getBlogPosts } from 'src/libs/backend/notion/getPosts';

export const getStaticProps = async () => {
  /* ここでNotionから記事を取得 */
  const posts = await getBlogPosts(10);

  return {
    props: {
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1>Blogs</h1>
      <div>
        {posts.map((post) => (
          <BlogItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
