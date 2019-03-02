import { ExternalLink } from 'components/links/external';
import CodeBlock from './code-block';
import Heading from './heading';
import Html from './html';
import InlineCode from './inline-code';
import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
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

const Markdown = props => (
  <ReactMarkdown
    {...props}
    renderers={renderers}
  />
);

export default Markdown;
