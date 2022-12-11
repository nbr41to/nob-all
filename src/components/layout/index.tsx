import type { FC, ReactNode } from 'react';

import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { BackGroundCowWrapper } from '../ui/BackGroundCowWrapper';
import { BreadcrumbsLinks } from './BreadcrumbsLinks';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  const breadcrumbsItems = useMemo(() => {
    const currentPath = router.pathname;
    if (currentPath === '/') return []; // home page

    const paths = currentPath.split('/');
    const items = paths.map((path, index) => {
      const href = paths.slice(0, index + 1).join('/') || '/';

      return {
        title: path || 'home',
        href,
      };
    });

    return items;
  }, [router.pathname]);

  return (
    <BackGroundCowWrapper>
      <Header />
      <div className="mx-auto max-w-[700px]">
        <BreadcrumbsLinks items={breadcrumbsItems} />
        <main>{children}</main>
      </div>
      <footer>
        <BreadcrumbsLinks items={breadcrumbsItems} />
      </footer>
    </BackGroundCowWrapper>
  );
};
