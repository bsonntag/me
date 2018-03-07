// @flow

import { Translator } from 'client/containers/translations';
import { getPostList } from 'blog';
import { margin } from 'client/styles';
import Blog from 'client/components/home/blog';
import React, { Fragment } from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

const Section = styled.div`
  &:not(:last-child) {
    ${margin.bottom('medium')}
  }
`;

const Home = () => (
  <Translator>
    {translate => (
      <Fragment>
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
            {translate('home.blog.title')}
          </Type.title>

          <Blog posts={getPostList()} />
        </Section>
      </Fragment>
    )}
  </Translator>
);

export default Home;
