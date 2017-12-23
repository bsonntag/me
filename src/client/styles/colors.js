// @flow

import color from 'color';

export function transparentize(colour: string, transparency: number): string {
  return color(colour)
    .alpha(transparency)
    .rgb()
    .string();
}

const black = '#000000';
const white = '#ffffff';

export const colors = {
  alternateTextColor: white,
  black,
  facebookBlue: '#3b5998',
  linkedInBlue: '#0077b5',
  primary: '#424242',
  primaryDark: '#1b1b1b',
  primaryLight: '#6d6d6d',
  secondary: '#bdbdbd',
  secondaryDark: '#8d8d8d',
  secondaryLight: '#efefef',
  textColor: black,
  twitterBlue: '#1da1f2',
  white,
};
