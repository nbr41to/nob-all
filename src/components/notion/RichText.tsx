import type { FC } from 'react';

import clsx from 'clsx';

type Props = {
  text: Array<any>;
};

const codeAnnotationClasses = 'bg-slate-100 px-1 font-mono text-red-500';

/* Notion の Block Object内のrich_textの配列をいい感じに変換する */
export const RichText: FC<Props> = ({ text }) => {
  return (
    <p className="inline leading-loose">
      {text.length === 0 ? (
        /* textがない場合が空白の改行 */
        <span className="block h-6" />
      ) : (
        <>
          {text.map((textItem: any, index: number) => {
            const { annotations } = textItem; // アノテーションを取得
            const { color } = textItem.annotations; // アノテーションの色を取得
            const { href } = textItem; // リンクを取得
            const annotationClasses = Object.keys(annotations).filter(
              (param: string) => annotations[param] === true
            );
            const key = `${index}`;

            if (href)
              return (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'underline',
                    color !== 'default' && `notion-${color}`,
                    annotationClasses.includes('bold') && 'font-bold',
                    annotationClasses.includes('italic') && 'font-italic',
                    annotationClasses.includes('underline') && 'underline',
                    annotationClasses.includes('strikethrough') &&
                      'line-through',
                    annotationClasses.includes('code') && codeAnnotationClasses
                  )}
                >
                  {textItem.plain_text}
                </a>
              );

            return (
              <span
                key={key}
                className={clsx(
                  '',
                  color !== 'default' && `notion-${color}`,
                  annotationClasses.includes('bold') && 'font-bold',
                  annotationClasses.includes('italic') && 'font-italic',
                  annotationClasses.includes('underline') && 'underline',
                  annotationClasses.includes('strikethrough') && 'line-through',
                  annotationClasses.includes('code') && codeAnnotationClasses
                )}
              >
                {textItem.plain_text}
              </span>
            );
          })}
        </>
      )}
    </p>
  );
};
