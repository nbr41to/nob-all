import type { InferGetStaticPropsType, NextPage } from 'next';

import fs from 'fs';

import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  /* Sand Page list を自動生成 */
  const files = fs.readdirSync('pages/sand');
  const sandPagePaths = files
    .filter((file) => file !== 'index.tsx')
    .map((file) => file.replace('.tsx', '').replace('.mdx', ''));

  return {
    props: {
      paths: sandPagePaths,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SandPage: NextPage<Props> = ({ paths }) => {
  return (
    <>
      <Head>
        <title>n.o.b | sand list</title>
      </Head>
      <div>
        <h1>Sand Page List</h1>
        <ul>
          {paths.map((path) => (
            <li key={path}>
              <Link href={`/sand/${path}`}>
                <a className=" cursor-pointer underline hover:text-blue-400">
                  {path}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SandPage;
