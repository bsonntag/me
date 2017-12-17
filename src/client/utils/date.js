// @flow

export const renderDate = (date: Date): string => {
  return date.toLocaleString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
