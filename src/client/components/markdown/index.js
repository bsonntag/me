import { ExternalLink } from 'client/components/links';
import { Fragment } from 'react';
import { withProps } from 'recompose';
import CodeBlock from './code-block';
import Heading from './heading';
import InlineCode from './inline-code';
import Markdown from 'react-markdown';
import Type from 'client/components/type';

const renderers = {
  code: CodeBlock,
  heading: Heading,
  inlineCode: InlineCode,
  link: ExternalLink,
  paragraph: Type.paragraph,
  root: Fragment,
};

export default withProps({ renderers })(Markdown);
