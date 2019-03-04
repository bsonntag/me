export const contentSize = 46;

export const lines = value => `${value * 1.5}rem`;

export const spacing = {
  large: lines(3),
  medium: lines(2),
  none: 0,
  small: lines(1),
  tiny: lines(0.5),
};
