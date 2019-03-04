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

export const createSpacing = (keys, spacing) => value => {
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

const padding = createSpacing(['padding'], spacing);

padding.bottom = createSpacing(['padding-bottom'], spacing);
padding.left = createSpacing(['padding-left'], spacing);
padding.right = createSpacing(['padding-right'], spacing);
padding.top = createSpacing(['padding-top'], spacing);

padding.horizontal = createSpacing(['padding-left', 'padding-right'], spacing);
padding.vertical = createSpacing(['padding-bottom', 'padding-top'], spacing);

const margin = createSpacing(['margin'], spacing);

margin.bottom = createSpacing(['margin-bottom'], spacing);
margin.left = createSpacing(['margin-left'], spacing);
margin.right = createSpacing(['margin-right'], spacing);
margin.top = createSpacing(['margin-top'], spacing);

margin.horizontal = createSpacing(['margin-left', 'margin-right'], spacing);
margin.vertical = createSpacing(['margin-bottom', 'margin-top'], spacing);

export { margin, padding };

export const gridGap = createSpacing(['grid-gap'], spacing);
