import { breakpoints } from './breakpoints';
import { compose, mapValues } from 'lodash/fp';
import { css } from 'styled-components';

function createMediaQuery(boundType, compensation = 0) {
  return breakpoint => `@media (${boundType}: ${breakpoint + compensation}px)`;
}

export const maxWidth = createMediaQuery('max-width', -1);

export const minWidth = createMediaQuery('min-width');

const createMediaQueries = createQuery => compose(
  mapValues(mediaQuery => (...args) => css`
    ${mediaQuery} {
      ${css(...args)}
    }
  `),
  mapValues(createQuery)
)(breakpoints);

export const media = {
  max: createMediaQueries(maxWidth),
  min: createMediaQueries(minWidth),
};
