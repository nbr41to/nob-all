import type { FC } from 'react';

import clsx from 'clsx';

export type Props = JSX.IntrinsicElements['a'] & {
  className?: string;
  icon: JSX.Element;
  url: string;
  label: string;
};

export const TopLinkButton: FC<Props> = ({
  className,
  icon,
  url,
  label,
  ...rest
}) => {
  return (
    <a
      className={clsx(
        className,
        'block h-28 rounded-xl bg-teal-200  py-4 px-6 text-lg font-bold text-white',
        'neumorphism-link active:neumorphism-link-active hover:neumorphism-link-hover',
        'flex flex-col items-center justify-center gap-2'
      )}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {icon}
      <span className="block">{label}</span>
    </a>
  );
};
