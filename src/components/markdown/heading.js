import { HeadingLink } from 'components/links/heading';
import { kebabCase } from 'lodash';
import React from 'react';
import Type from 'components/type';

function getComponent(level) {
  switch (level) {
    case 1:
      return Type.heading;
    case 2:
      return Type.title;
    case 3:
      return Type.subheading;
    default:
      return `h${level}`;
  }
}

const Heading = ({ children, level }) => {
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

export default Heading;
