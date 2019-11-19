import { codeFontFamily, codeStyle } from 'styles/code';
import { contentSize, spacing } from 'styles/spacing';
import { highlightCode } from 'utils/code';
import { renderInnerHtml } from 'utils/html';
import { smallFontSize } from 'styles/typography';
import React from 'react';
import colors from 'styles/colors';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${colors.primary};
  margin: ${spacing.small} -${spacing.small};
  overflow-x: auto;

  @media screen and (min-width: ${smallFontSize * contentSize + 1}px) {
    border-radius: 4px;
  }
`;

const Pre = styled.pre`
  color: ${colors.white};
  font-family: ${codeFontFamily};
  padding: ${spacing.small};
`;

const Code = styled.code`
  ${codeStyle}
`;

const CodeBlock = ({ language, value }) => (
  <Container>
    <Pre>
      <Code
        dangerouslySetInnerHTML={renderInnerHtml(
          highlightCode(value, language)
        )}
      />
    </Pre>
  </Container>
);

export default CodeBlock;
