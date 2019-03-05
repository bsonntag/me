import { spacing } from 'styles/spacing';
import LinkIcon from 'components/icon/link';
import React from 'react';
import styled from 'styled-components';

const AnchorContainer = styled.aside`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  padding-right: ${spacing.small};
  position: absolute;
  left: -${spacing.small};
  top: 0;
  transition: opacity 200ms ease-in-out;

  &:focus-within,
  &:hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;

  &:focus-within,
  &:hover {
    & > ${AnchorContainer} {
      opacity: 1;
    }
  }
`;

const ScallingLink = styled.a`
  display: block;
  transition: transform 200ms ease-in-out;

  &:focus, &:hover {
    transform: scale(1.4);
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
      <ScallingLink href={href}>
        <div>
          <LinkIcon size={'1rem'} />
        </div>
      </ScallingLink>
    </AnchorContainer>

    {children}
  </Container>
);
