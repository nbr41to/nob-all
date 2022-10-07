import 'styles/globals.css';
import 'styles/mantineBase.css';
import type { AppProps } from 'next/app';
import type { ComponentProps } from 'react';

import { ModalsProvider } from '@mantine/modals';
import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

import { Layout } from 'src/components/layout';

const components = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1 className="text-3xl" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="text-xl" {...props}>
      {props.children}
    </h2>
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre className="rounded bg-gray-300 p-1" {...props}>
      {props.children}
    </pre>
  ),
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>n.o.b</title>
      </Head>

      <ModalsProvider>
        <Layout>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </ModalsProvider>
    </>
  );
};

export default MyApp;
