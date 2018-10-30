import {
  codeFontFamily,
  codeStyle,
  colors,
  margin,
  padding,
} from 'styles';

import { highlightCode } from 'utils/code';
import { renderInnerHtml } from 'utils/html';
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

const CodeBlock = ({ language, value }) => (
  <Pre>
    <Code dangerouslySetInnerHTML={renderInnerHtml(highlightCode(value, language))} />
  </Pre>
);

export default CodeBlock;
