import type { FC, ReactNode } from 'react';

import clsx from 'clsx';

export type Props = JSX.IntrinsicElements['button'] & {
  className?: string;
  children: string | ReactNode;
};

export const Button: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <button
      className={clsx(
        className,
        'rounded-xl bg-teal-500 py-4 px-6 text-xl font-bold text-white shadow',
        'border-4 border-teal-600',
        'hover:shadow-inner hover:brightness-90'
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};
