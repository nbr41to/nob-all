import 'styles/globals.css';
import type { AppProps } from 'next/app';

import { ModalsProvider } from '@mantine/modals';

import { Layout } from 'src/components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalsProvider>
  );
};

export default MyApp;
