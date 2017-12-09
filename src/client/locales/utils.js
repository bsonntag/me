// @flow

export const externalLink = (text: string, url: string) => {
  return `<a href=${url} rel="noreferrer noopener" target="_blank">${text}</a>`;
};
