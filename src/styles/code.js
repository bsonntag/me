const prismColors = {
  boolean: '#ff8b50',
  char: '#d8dee9',
  className: '#fac863',
  comment: '#999999',
  function: '#79b6f2',
  keyword: '#c5a5c5',
  lineHighlight: '#14161a',
  method: '#6699cc',
  operator: '#fc929e',
  primitive: '#5a9bcf',
  punctuation: '#5fb3b3',
  string: '#8dc891',
  tag: '#fc929e',
  variable: '#d7deea',
};

export const codeFontFamily = `'Source Code Pro', monospace`;

export const codeStyle = `
  font-family: ${codeFontFamily};

  .token.attr-name,
  .token.keyword {
    color: ${prismColors.keyword};
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.comment};
  }

  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${prismColors.primitive};
  }

  .token.boolean {
    color: ${prismColors.boolean};
  }

  .token.tag {
    color: ${prismColors.tag};
  }

  .token.attr-value,
  .token.string {
    color: ${prismColors.string};
  }

  .token.punctuation {
    color: ${prismColors.punctuation};
  }

  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${prismColors.char};
  }

  .token.function {
    color: ${prismColors.function};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: ${prismColors.variable};
  }

  .token.atrule,
  .token.class-name {
    color: ${prismColors.className};
  }

  .token.important {
    font-weight: 400;
  }

  .token.bold {
    font-weight: 700;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .namespace {
    opacity: 0.7;
  }
`;
