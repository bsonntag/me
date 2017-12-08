// @flow

export const breakpoints = {
  lg: 1200,
  md: 992,
  sm: 768,
  xl: 1440,
  xs: 480,
  xxs: 320,
};

export type BreakpointKey = $Keys<typeof breakpoints>;

export const sortBreakpoints = (keys: Array<BreakpointKey>): Array<BreakpointKey> => {
  return keys.sort((first, second) => breakpoints[first] - breakpoints[second]);
};
