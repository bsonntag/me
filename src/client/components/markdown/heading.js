import { HeadingLink } from 'client/components/links';
import { kebabCase } from 'lodash';
import { margin } from 'client/styles';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

function getComponent(level) {
  switch (level) {
    case 1:
      return Type.heading;
    case 2:
      return styled(Type.title)`
        ${margin.top('medium')}
      `;
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
