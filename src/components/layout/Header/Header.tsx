import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header className="bg-white/70">
      <div className="py-8 text-center">
        <h1 className="pl-6 text-3xl font-bold">のぶろぐ。</h1>
        <p className="mt-2 text-sm">〜 のまど先生の生存確認日記 〜</p>
      </div>

      <div className="relative mx-auto h-64 w-full max-w-[600px]">
        <Image
          className="rounded-xl"
          src="/site_image.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <nav className="flex justify-center gap-4 py-4">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/zenn">
          <a>Zenn</a>
        </Link>
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
        <Link href="/links">
          <a>MyLinks</a>
        </Link>
        <Link href="/sand/notion-blocks-preview">
          <a>NBPreview</a>
        </Link>
        <Link href="/sand">
          <a>Sandbox</a>
        </Link>
      </nav>
    </header>
  );
};
