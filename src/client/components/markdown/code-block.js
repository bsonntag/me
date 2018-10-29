import {
  codeFontFamily,
  codeStyle,
  colors,
  margin,
  padding,
} from 'client/styles';

import { highlightCode } from 'client/utils/code';
import React from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
  background-color: ${colors.primary};
  border-radius: 4px;
  color: ${colors.white};
  font-family: ${codeFontFamily};
  max-width: 100%;
  overflow-x: auto;

  ${margin.vertical('small')}
  ${padding('small')}
`;

const Code = styled.code`
  ${codeStyle}
`;

const renderInnerHtml = html => ({
  __html: html, // eslint-disable-line id-match
});

const CodeBlock = ({ language, value }) => (
  <Pre>
    <Code dangerouslySetInnerHTML={renderInnerHtml(highlightCode(value, language))} />
  </Pre>
);

export default CodeBlock;
