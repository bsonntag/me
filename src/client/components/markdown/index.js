// @flow

import { ExternalLink } from 'client/components/links';
import { margin, typeStyles } from 'client/styles';
import { withProps } from 'recompose';
import CodeBlock from './code-block';
import Heading from './heading';
import InlineCode from './inline-code';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const renderers = {
  code: CodeBlock,
  heading: Heading,
  inlineCode: InlineCode,
  link: ExternalLink,
};

export default styled(withProps({ renderers })(Markdown))`
  ${typeStyles}

  h2 {
    ${margin.top('medium')}
  }
`;
