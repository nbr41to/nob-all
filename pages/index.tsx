import type { InferGetStaticPropsType, NextPage } from 'next';

import { Home } from 'src/components/pages/Home';
import { BlogItem } from 'src/components/ui/BlogItem';
import { Container } from 'src/components/ui/Container';
import { getBlogPosts } from 'src/libs/backend/notion/getPosts';

export const getStaticProps = async () => {
  /* ここでNotionから記事を取得 */
  const posts = await getBlogPosts(6);

  return {
    props: {
      posts,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1 className="font--font-mpr1c">てすとだよ tests</h1>
      <Home />

      <Container>
        <div className="space-y-4">
          {posts.map((post) => (
            <BlogItem key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
