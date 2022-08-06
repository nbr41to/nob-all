import clsx from 'clsx';

/* Notion の Block Object内のtextの配列をいい感じに変換する */
export const compiledText = (text: Array<any>) => {
  /* textがない場合が空白の改行 */
  if (text.length === 0) return <div className="h-6" />;

  return text.map((textItem: any, index: number) => {
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
            annotationClasses.includes('strikethrough') && 'line-through',
            annotationClasses.includes('code') && 'font-mono text-white'
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
          annotationClasses.includes('code') && 'font-mono text-white'
        )}
      >
        {textItem.plain_text}
      </span>
    );
  });
};
