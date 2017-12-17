// @flow

export type RouterLocation = {
  key: string,
  state: Object,
} & Location;

export type RouterHistory = {
  action: string,
  block: ((RouterLocation, string) => void) | string,
  go: number => void,
  goBack: () => void,
  goForward: () => void,
  length: number,
  location: RouterLocation,
  push: (path: string, state?: Object) => void,
  replace: (path: string, state?: Object) => void,
};

export type RouteMatch = {
  isExact: boolean,
  params: {
    [key: string]: string,
  },
  path: string,
  url: string,
};

export type RouteProps = {
  history: RouterHistory,
  location: RouterLocation,
  match: RouteMatch,
};
