import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <header>
        <h1 className="text-center text-2xl font-bold">n.o.b</h1>
      </header>
      <main>{children}</main>
      <footer />
    </div>
  );
};
