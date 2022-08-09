import type { FC, ReactNode } from 'react';

import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <h1 className="text-center text-2xl font-bold">n.o.b</h1>
        <nav className="flex justify-center gap-4">
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/zenn">
            <a>Zenn</a>
          </Link>
          <Link href="/links">
            <a>MyLinks</a>
          </Link>
          <Link href="/sand/notion-blocks-preview">
            <a>NBPreview</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer />
    </div>
  );
};
