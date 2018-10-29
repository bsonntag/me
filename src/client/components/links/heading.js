// @flow

import { units } from 'client/styles';
import Icon from 'client/components/icon';
import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
  href: string,
};

const AnchorContainer = styled.aside`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-right: ${units(1)};
  position: absolute;
  left: ${units(-2.5)};
  top: 6px;
  visibility: hidden;

  &:hover {
    visibility: visible;
  }
`;

const Container = styled.div`
  position: relative;

  &:hover > ${AnchorContainer} {
    visibility: visible;
  }
`;

/**
 * `HeadingLink` component.
 *
 * The icon is inside a div so that it doesn't appear on Firefox's reader view.
 */

export const HeadingLink = ({ children, href }: Props) => (
  <Container>
    <AnchorContainer aria-hidden>
      <a href={href}>
        <div>
          <Icon.link size={units(2)} />
        </div>
      </a>
    </AnchorContainer>

    {children}
  </Container>
);
