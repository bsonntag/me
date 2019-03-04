import { Heading, SubTitle, Title } from 'components/typography';
import { HeadingLink } from 'components/links/heading';
import { kebabCase } from 'lodash';
import React from 'react';

function getComponent(level) {
  switch (level) {
    case 1:
      return Heading;
    case 2:
      return Title;
    case 3:
      return SubTitle;
    default:
      return `h${level}`;
  }
}

const MarkdownHeading = ({ children, level }) => {
  const id = kebabCase(children);
  const url = `#${id}`;
  const Component = getComponent(level);

  return (
    <HeadingLink href={url}>
      <Component id={id}>
        {children}
      </Component>
    </HeadingLink>
  );
};

export default MarkdownHeading;
