// @flow

type ProjectType = 'project' | 'module';

export type Project = {
  key: string,
  name: string,
  type: ProjectType,
  url: string,
  wip?: boolean,
};
