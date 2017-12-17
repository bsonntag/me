// @flow

import { HeadingLink } from 'client/components/links';
import { kebabCase } from 'lodash';
import React from 'react';

type Props = {
  children: string,
  level: number,
};

const Heading = ({ children, level }: Props) => {
  const id = kebabCase(children);
  const url = `#${id}`;
  const Component = `h${level}`;

  return (
    <HeadingLink href={url}>
      <Component id={id}>
        {children}
      </Component>
    </HeadingLink>
  );
};

export default Heading;
