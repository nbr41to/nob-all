import type { FC, ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { BreadcrumbsLinks } from './BreadcrumbsLinks';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  const breadcrumbsItems = useMemo(() => {
    const currentPath = router.pathname;
    const paths = currentPath.split('/').splice(1);
    const items = paths.map((path, index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`;

      return {
        title: path,
        href,
      };
    });

    return items;
  }, [router.pathname]);

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
        <BreadcrumbsLinks items={breadcrumbsItems} />
      </header>
      <main>{children}</main>
      <footer>
        <BreadcrumbsLinks items={breadcrumbsItems} />
      </footer>
    </div>
  );
};
