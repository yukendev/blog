import MarkdownIt from 'markdown-it';
import mdContainer from 'markdown-it-container';
import markdownItEmoji from 'markdown-it-emoji';
import markdownItToc from 'markdown-it-table-of-contents';
import markdownItAnchor from 'markdown-it-anchor';
import { mdRendererFence } from './markdownPlugins/md-renderer-fence';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeShiki from 'rehype-shiki';
import rehypeCodeTitles from 'rehype-code-titles';
import rlc from 'remark-link-card';
import rehypeExternalLinks from 'rehype-external-links';

// export type TVSCode =
//   | 'abyss'
//   | 'dark_plus'
//   | 'dark_vs'
//   | 'hc_black'
//   | 'kimbie_dark'
//   | 'light_plus'
//   | 'light_vs'
//   | 'monokai'
//   | 'monokai_dimmed'
//   | 'quietlight'
//   | 'red'
//   | 'solarized_dark'
//   | 'solarized_light'

// export type TMaterial =
//   | 'Material-Theme-Darker-High-Contrast'
//   | 'Material-Theme-Darker'
//   | 'Material-Theme-Default-High-Contrast'
//   | 'Material-Theme-Default'
//   | 'Material-Theme-Lighter-High-Contrast'
//   | 'Material-Theme-Lighter'
//   | 'Material-Theme-Ocean-High-Contrast'
//   | 'Material-Theme-Ocean'
//   | 'Material-Theme-Palenight-High-Contrast'
//   | 'Material-Theme-Palenight'

// export type TNice =
//   | 'nord'
//   | 'min-light'
//   | 'min-dark'
//   | 'white'
//   | 'white-night'
//   | 'zeit'

// export type TTheme = TVSCode | TMaterial | TNice

export const converMarkdownToHtml = async (markdown: string, date: string) => {
  const result = await unified()
    .use(remarkParse) // markdown から mdast(markdown の AST)に変換
    .use(rlc)
    .use(remarkRehype, { allowDangerousHtml: true }) // mdast から hast(html の AST)に変換
    .use(rehypeExternalLinks, { target: '_blank' }) // すべてのリンクを外部リンクに変換
    .use(rehypeCodeTitles)
    .use(rehypeShiki, { theme: 'Material-Theme-Palenight' }) // shiki によるコードのハイライト
    .use(rehypeStringify, { allowDangerousHtml: true }) // hast から HTML へ変換
    .process(markdown);

  return result.toString();

  // const markdownIt = new MarkdownIt({
  //   html: true,
  //   linkify: true,
  //   typographer: true,
  //   langPrefix: 'language-',
  // })
  //   .use(mdContainer, 'question', containerQuestionOptions)
  //   .use(mdContainer, 'attention', containerAttentionOptions)
  //   .use(mdContainer, 'alert', containerAlertOptions)
  //   .use(mdContainer, 'info', containerInfoOptions)
  //   .use(markdownItToc, {
  //     includeLevel: [1],
  //     listType: 'ol',
  //   })
  //   .use(markdownItAnchor)
  //   .use(markdownItEmoji)
  //   .use(mdRendererFence);

  // return markdownIt
  //   .render(markdown)
  //   .replace(/@image/g, `/assets/images/posts/${date}`);
};

// ::: question
// 🤔 text
// :::
var queClassRegex = /^question$/;
const containerQuestionOptions = {
  validate: function (params: any) {
    return queClassRegex.test(params.trim());
  },
  render: function (tokens: any, idx: number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="question">';
    } else {
      // closing tag
      return '</div>\n';
    }
  },
};

// ::: attention
// 😬 text
// :::
var attClassRegex = /^attention$/;
const containerAttentionOptions = {
  validate: function (params: any) {
    return attClassRegex.test(params.trim());
  },
  render: function (tokens: any, idx: number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="attention">';
    } else {
      // closing tag
      return '</div>\n';
    }
  },
};

// ::: alert
// 😭 text
// :::
var aleClassRegex = /^alert$/;
const containerAlertOptions = {
  validate: function (params: any) {
    return aleClassRegex.test(params.trim());
  },
  render: function (tokens: any, idx: number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="alert">';
    } else {
      // closing tag
      return '</div>\n';
    }
  },
};

// ::: info
// 🤓 text
// :::
var infoClassRegex = /^info$/;
const containerInfoOptions = {
  validate: function (params: any) {
    return infoClassRegex.test(params.trim());
  },
  render: function (tokens: any, idx: number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="info">';
    } else {
      // closing tag
      return '</div>\n';
    }
  },
};
