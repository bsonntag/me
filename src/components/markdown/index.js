import { ExternalLink } from 'components/links/external';
import { Fragment } from 'react';
import { withProps } from 'recompose';
import CodeBlock from './code-block';
import Heading from './heading';
import Html from './html';
import InlineCode from './inline-code';
import Markdown from 'react-markdown';
import Type from 'components/type';

const renderers = {
  code: CodeBlock,
  heading: Heading,
  html: Html,
  inlineCode: InlineCode,
  link: ExternalLink,
  paragraph: Type.paragraph,
  root: Fragment,
};

export default withProps({ renderers })(Markdown);
