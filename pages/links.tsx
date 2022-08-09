import type { NextPage } from 'next';

import Head from 'next/head';

import { MyLinks } from 'src/components/pages/MyLinks';

const MyLinksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>n.o.b | links</title>
      </Head>
      <MyLinks />
    </>
  );
};

export default MyLinksPage;
