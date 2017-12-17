// @flow

import type { Translate } from 'client/locales';
import { getPostList } from 'blog';
import { margin } from 'client/styles';
import { translator } from 'client/locales';
import Blog from './blog';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

type Props = {
  translate: Translate,
};

const Section = styled.div`
  &:not(:last-child) {
    ${margin.bottom('medium')}
  }
`;

const Home = ({ translate }: Props) => (
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
        {translate('home.blog.title')}
      </Type.title>

      <Blog posts={getPostList()} />
    </Section>
  </div>
);

export default translator(Home);
