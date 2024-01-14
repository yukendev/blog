import Prism, { Grammar } from 'prismjs';
import { escapeHtml } from 'markdown-it/lib/common/utils';
/* ハイライトする言語を以下でimport */
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-swift";

// import { enableDiffHighlight } from '../prism-plugins/prism-diff-highlight';

// diffプラグインを有効化
// enableDiffHighlight();

function highlightContent({
  text,
  prismGrammer,
  langName,
  hasDiff,
}: {
  text: string;
  prismGrammer?: Grammar;
  langName?: string;
  hasDiff: boolean;
}): string {
  if (prismGrammer && langName) {
    if (hasDiff)
      return Prism.highlight(text, Prism.languages.diff, `diff-${langName}`);

    return Prism.highlight(text, prismGrammer, langName);
  }

  if (hasDiff) return Prism.highlight(text, Prism.languages.diff, 'diff');
  return escapeHtml(text);
}

export function highlight(
  text: string,
  langName: string,
  hasDiff: boolean
): string {
  const prismGrammer = Prism.languages[langName];
  return highlightContent({ text, prismGrammer, langName, hasDiff });
}
