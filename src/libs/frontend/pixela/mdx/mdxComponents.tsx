import type { ComponentProps } from 'react';

/* MDX inner styles */
export const mdxComponents = {
  h1: (props: ComponentProps<'h1'>) => (
    <h1 className="text-3xl" {...props}>
      {props.children}
    </h1>
  ),
  h2: (props: ComponentProps<'h2'>) => (
    <h2 className="text-xl" {...props}>
      {props.children}
    </h2>
  ),
  a: (props: ComponentProps<'a'>) => (
    <a
      className="text-blue-600 underline transition-all hover:font-bold"
      {...props}
    >
      {props.children}
    </a>
  ),
  pre: (props: ComponentProps<'pre'>) => (
    <pre className="rounded bg-gray-800 py-2 px-4 text-white" {...props}>
      {props.children}
    </pre>
  ),
};
