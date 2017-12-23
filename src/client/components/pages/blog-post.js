// @flow

import type { Config } from 'common/types';
import type { Post } from 'blog';
import type { RouteProps } from 'client/types';
import { getBlogPost } from 'blog';
import { margin } from 'client/styles';
import { renderDate } from 'client/utils';
import Markdown from 'client/components/markdown';
import React from 'react';
import Share from 'client/components/share';
import Type from 'client/components/type';
import styled from 'styled-components';
import withConfig from 'client/hocs/with-config';

type Props = {
  blog: {
    posts: Array<Post>,
  },
  config: Config,
} & RouteProps;

const Title = styled(Type.heading)`
  ${margin.bottom('none')}
`;

const PostDate = styled(Type.paragraph)`
  ${margin.bottom('medium')}
`;

const BlogPost = ({ config, location, match }: Props) => {
  const { postId } = match.params;
  const { content, date, title } = getBlogPost(postId);

  return (
    <article>
      <Title>
        {title}
      </Title>

      <PostDate>
        {renderDate(date)}
      </PostDate>

      <Markdown source={content} />

      <Share url={config.get('baseUrl') + location.pathname} />
    </article>
  );
};

export default withConfig(BlogPost);
