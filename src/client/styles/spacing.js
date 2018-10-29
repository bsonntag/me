import { css } from 'styled-components';
import { get } from 'lodash';
import { media } from './media';
import { sortBreakpoints } from './breakpoints';
import { units } from './units';

const large = {
  base: units(5),
  sm: units(10),
  xs: units(8),
};

const medium = {
  base: units(2),
  sm: units(5),
  xs: units(4),
};

const small = {
  base: units(1),
  sm: units(2),
};

const tiny = {
  base: units(0.5),
};

const none = {
  base: 0,
};

export const spacing = {
  large,
  medium,
  none,
  small,
  tiny,
};

const createSpacing = (...keys) => value => {
  const {
    base,
    ...breakpoints
  } = typeof value === 'string' ? spacing[value] : value;

  const breakpointKeys = sortBreakpoints(Object.keys(breakpoints));

  const breakpointReducer = (result, breakpoint) => {
    const value = get(breakpoints, breakpoint);

    return css`
      ${result}

      ${media.min[breakpoint]`
        ${keys.map(key => `${key}: ${value};`)}
      `}
    `;
  };

  return css`
    ${keys.map(key => `${key}: ${base};`)}

    ${breakpointKeys.reduce(breakpointReducer, '')}
  `;
};

const padding = createSpacing('padding');

padding.bottom = createSpacing('padding-bottom');
padding.left = createSpacing('padding-left');
padding.right = createSpacing('padding-right');
padding.top = createSpacing('padding-top');

padding.horizontal = createSpacing('padding-left', 'padding-right');
padding.vertical = createSpacing('padding-bottom', 'padding-top');

const margin = createSpacing('margin');

margin.bottom = createSpacing('margin-bottom');
margin.left = createSpacing('margin-left');
margin.right = createSpacing('margin-right');
margin.top = createSpacing('margin-top');

margin.horizontal = createSpacing('margin-left', 'margin-right');
margin.vertical = createSpacing('margin-bottom', 'margin-top');

export { margin, padding };
