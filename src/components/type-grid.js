import { defaultLineHeight, smallLineHeight } from 'styles/typography';
import { ifProp } from 'styled-tools';
import { media } from 'styles/media';
import { spacing } from 'styles/spacing';
import React, { useState } from 'react';
import colors from 'styles/colors';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Grid = styled.div`
  background: rgba(0, 0, 0, 0)
    linear-gradient(rgba(0, 119, 179, 0.2) 1px, transparent 1px) repeat scroll
    left top / ${smallLineHeight}px ${smallLineHeight}px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${ifProp('hidden', 0, 1)};
  pointer-events: none;

  ${media.min.sm`
    background-size: ${defaultLineHeight}px ${defaultLineHeight}px;
  `}
`;

const Toggle = styled.label`
  background-color: ${colors.primary};
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  padding: ${spacing.tiny};
  transition: visibility 0s linear 400ms;
`;

const visibleStyles = css`
  transform: translateX(0);

  > ${Toggle} {
    transition-delay: 0s;
    visibility: visible;
  }
`;

const ToggleContainer = styled.div`
  padding: 0 ${spacing.small};
  position: fixed;
  right: 0;
  transform: translateX(calc(100% - ${spacing.small}));
  transition: transform 400ms ease-in-out;
  top: ${spacing.small};
  user-select: none;

  ${ifProp('isVisible', visibleStyles)}

  &:focus, &:hover {
    ${visibleStyles}
  }
`;

const Checkbox = styled.input`
  cursor: pointer;
  margin-left: 0.75rem;
`;

const TypeGrid = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Grid hidden={!isVisible} />

      <ToggleContainer isVisible={isVisible}>
        <Toggle>
          Toggle Grid
          <Checkbox
            checked={isVisible}
            onChange={() => setIsVisible(isVisible => !isVisible)}
            type={'checkbox'}
          />
        </Toggle>
      </ToggleContainer>

      {children}
    </Container>
  );
};

export default TypeGrid;
