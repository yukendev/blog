import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import markdownItPrism from 'markdown-it-prism'

export const converMarkdownToHtml = async(markdown: string) => {
  const markdownIt = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    langPrefix: 'language-',
  })
  .use(mdContainer, 'question', containerQuestionOptions)
  .use(mdContainer, 'attention', containerAttentionOptions)
  .use(mdContainer, 'alert', containerAlertOptions)
  .use(mdContainer, 'info', containerInfoOptions)
  .use(markdownItPrism, {})

  return markdownIt.render(markdown)
}

// ::: question
// 🤔 text
// :::
var queClassRegex = /^question$/;
const containerQuestionOptions = {
  validate: function (params:any) {
      return queClassRegex.test(params.trim());
  },
  render: function (tokens:any, idx:number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="question">';
    }
    else {
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
  validate: function (params:any) {
      return attClassRegex.test(params.trim());
  },
  render: function (tokens:any, idx:number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="attention">';
    }
    else {
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
  validate: function (params:any) {
      return aleClassRegex.test(params.trim());
  },
  render: function (tokens:any, idx:number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="alert">';
    }
    else {
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
  validate: function (params:any) {
      return infoClassRegex.test(params.trim());
  },
  render: function (tokens:any, idx:number) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      return '<div class="info">';
    }
    else {
      // closing tag
      return '</div>\n';
    }
  },
};