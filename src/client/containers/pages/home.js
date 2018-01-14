// @flow

import type { TranslateProps } from 'client/types';
import { getPostList } from 'blog';
import { margin } from 'client/styles';
import Blog from 'client/components/home/blog';
import Projects from 'client/components/home/projects';
import React from 'react';
import Type from 'client/components/type';
import entities from 'client/entities';
import styled from 'styled-components';
import translator from 'client/hocs/translator';

const Section = styled.div`
  &:not(:last-child) {
    ${margin.bottom('medium')}
  }
`;

const Home = ({ translate }: TranslateProps) => (
  <div>
    <Type.heading>
      {translate('home.heading')}
    </Type.heading>

    <Section>
      <Type.title>
        {translate('home.whatIDo.title')}
      </Type.title>

      <Type.paragraph raw>
        {translate('home.whatIDo.description')}
      </Type.paragraph>
    </Section>

    <Section>
      <Type.title>
        {translate('home.work.title')}
      </Type.title>

      <Type.paragraph raw>
        {translate('home.work.description')}
      </Type.paragraph>
    </Section>

    <Section>
      <Type.title>
        {translate('home.projects.title')}
      </Type.title>

      <Projects projects={entities.projects} />
    </Section>

    <Section>
      <Type.title>
        {translate('home.blog.title')}
      </Type.title>

      <Blog posts={getPostList()} />
    </Section>
  </div>
);

export default translator(Home);
