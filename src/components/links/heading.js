import { units } from 'styles';
import LinkIcon from 'components/icon/link';
import React from 'react';
import styled from 'styled-components';

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

export const HeadingLink = ({ children, href }) => (
  <Container>
    <AnchorContainer aria-hidden>
      <a href={href}>
        <div>
          <LinkIcon size={units(2)} />
        </div>
      </a>
    </AnchorContainer>

    {children}
  </Container>
);
