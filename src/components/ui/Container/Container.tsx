import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return <div className="rounded-lg bg-white/80 p-8 shadow">{children}</div>;
};
