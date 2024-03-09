import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from 'rehype-shiki';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeExternalLinks from 'rehype-external-links';

export const converMarkdownToHtml = async (markdown: string, date: string) => {
  const result = await unified()
    .use(remarkParse) // markdown から mdast(markdown の AST)に変換
    .use(remarkRehype, { allowDangerousHtml: true }) // mdast から hast(html の AST)に変換
    .use(rehypeExternalLinks, { target: '_blank' }) // すべてのリンクを外部リンクに変換
    .use(rehypeCodeTitles)
    .use(rehypeShiki, { theme: 'Material-Theme-Palenight' }) // shiki によるコードのハイライト
    .use(rehypeStringify, { allowDangerousHtml: true }) // hast から HTML へ変換
    .process(markdown);

  return result.toString().replace(/@image/g, `/assets/images/posts/${date}`);
};
