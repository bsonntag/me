// @flow

import { ExternalLink } from 'client/components/links';
import type { Project, TranslateProps } from 'client/types';
import { camelCase } from 'lodash';
import { margin } from 'client/styles';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';
import translator from 'client/hocs/translator';

type Props = {
  projects: Array<Project>,
} & TranslateProps;

function getDescriptionTranslationKey({ key }: Project): string {
  return `home.projects.items.${camelCase(key)}.description`;
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  ${margin.bottom('small')}
`;

const NameContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;

  > :not(:last-child) {
    ${margin.right('small')}
  }
`;

const Projects = ({ projects, translate }: Props) => (
  <List>
    {projects.map(project => (
      <ListItem key={project.key}>
        <NameContainer>
          <Type.subheading>
            <ExternalLink href={project.url}>
              {project.name}
            </ExternalLink>
          </Type.subheading>

          {project.wip && (
            <Type.caption>
              {translate('home.projects.wip')}
            </Type.caption>
          )}
        </NameContainer>

        <Type.paragraph>
          {translate(getDescriptionTranslationKey(project))}
        </Type.paragraph>
      </ListItem>
    ))}
  </List>
);

export default translator(Projects);
