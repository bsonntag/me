// @flow

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx'; // eslint-disable-line sort-imports-es6/sort-imports-es6

export function highlightCode(code: string, language: string) {
  return Prism.highlight(code, Prism.languages[language]);
}
