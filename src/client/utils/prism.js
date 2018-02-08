// @flow
/* eslint-disable no-div-regex */

import Prism from 'prismjs';

const javascript = Prism.util.clone(Prism.languages.javascript);

Prism.languages.jsx = Prism.languages.extend('markup', javascript);
Prism.languages.jsx.tag.pattern = /<\/?[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+|(?:\{\{?[^}]*\}?\})))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?>/i;

Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;

Prism.languages.insertBefore('inside', 'attr-name', {
  spread: {
    inside: {
      'attr-value': /\w+/,
      punctuation: /\.{3}|[{}.]/,
    },
    pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
  },
}, Prism.languages.jsx.tag);

let jsxExpression = Prism.util.clone(Prism.languages.jsx);

delete jsxExpression.punctuation;

jsxExpression = Prism.languages.insertBefore('jsx', 'operator', {
  punctuation: /=(?={)|[{}[\];(),.:]/,
}, { jsx: jsxExpression });

Prism.languages.insertBefore('inside', 'attr-value', {
  script: {
    alias: 'language-javascript',
    inside: jsxExpression,
    pattern: /=(\{(?:\{[^}]*\}|[^}])+\})/i,
  },
}, Prism.languages.jsx.tag);

export default Prism;
