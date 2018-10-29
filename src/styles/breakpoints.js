export const breakpoints = {
  lg: 1200,
  md: 992,
  sm: 768,
  xl: 1440,
  xs: 480,
  xxs: 320,
};

export const sortBreakpoints = keys => {
  return keys.sort((first, second) => breakpoints[first] - breakpoints[second]);
};
