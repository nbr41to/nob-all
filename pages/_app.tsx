import 'styles/globals.css';
import 'styles/mantineBase.css';
import type { AppProps } from 'next/app';

import { ModalsProvider } from '@mantine/modals';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

import { Layout } from 'src/components/layout';
import { mdxComponents } from 'src/libs/frontend/pixela/mdx/mdxComponents';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>n.o.b</title>
      </Head>

      <ModalsProvider>
        <Layout>
          <MDXProvider components={mdxComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </ModalsProvider>
    </>
  );
};

export default MyApp;
