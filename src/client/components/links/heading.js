// @flow

import type { Node } from 'react';
import { units } from 'client/styles';
import Icon from 'client/components/icon';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
  href: string,
};

const Anchor = styled.a`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-right: ${units(1)};
  position: absolute;
  left: ${units(-2.5)};
  top: 0;
  visibility: hidden;

  &:hover {
    visibility: visible;
  }
`;

const Container = styled.div`
  position: relative;

  &:hover > ${Anchor} {
    visibility: visible;
  }
`;

export const HeadingLink = ({ children, href }: Props) => (
  <Container>
    <Anchor href={href}>
      <Icon.link size={units(2)} />
    </Anchor>

    {children}
  </Container>
);
