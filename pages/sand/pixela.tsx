import type { NextPage } from 'next';

import { Button } from '@mantine/core';
import Head from 'next/head';

import {
  pixelaCreateGraph,
  pixelaCreateUser,
  pixelaIncrementGraph,
} from 'src/libs/frontend/pixela';

const PixelaPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>n.o.b | sand/pixela</title>
      </Head>
      <div>
        <img
          src="https://pixe.la/v1/users/nbr41to/graphs/test-graph-id"
          alt="Pixela Graph"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={() => pixelaCreateUser('nbr41to', 'mytoken-secret')}>
          createUser
        </Button>
        <Button onClick={() => pixelaCreateGraph('nbr41to')}>
          createGraph
        </Button>
        <Button
          onClick={() => pixelaIncrementGraph('nbr41to', 'test-graph-id')}
        >
          Increment
        </Button>
      </div>
    </>
  );
};

export default PixelaPage;
