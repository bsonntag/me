export const renderDate = date => {
  return date.toLocaleString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
