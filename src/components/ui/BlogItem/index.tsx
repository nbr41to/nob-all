import type { FC } from 'react';

import { useRouter } from 'next/router';

type Props = {
  post: {
    id: string;
    title: string;
    icon: string;
    category: string;
    atDate: string;
  };
};

export const BlogItem: FC<Props> = ({ post }) => {
  const { id, title, icon, category, atDate } = post;
  const router = useRouter();

  return (
    <div
      className="rounded border p-4 transition-colors hover:bg-gray-300/20"
      tabIndex={0}
      role="button"
      onKeyDown={router.back}
      onClick={() => router.push(`/blogs/${id}`)}
    >
      <div>{icon}</div>
      <h3>{title}</h3>
      <div>Category: {category}</div>
      <div>Date: {atDate}</div>
    </div>
  );
};
