import 'styles/globals.css';
import type { AppProps } from 'next/app';

import { ModalsProvider } from '@mantine/modals';
import Head from 'next/head';

import { Layout } from 'src/components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>n.o.b</title>
      </Head>

      <ModalsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalsProvider>
    </>
  );
};

export default MyApp;
