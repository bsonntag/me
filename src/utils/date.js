export const renderDate = date => {
  return new Date(date).toLocaleString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
