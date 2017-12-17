// @flow

import type { Post } from 'blog';
import type { RouteProps } from 'client/types';
import { getBlogPost } from 'blog';
import { margin } from 'client/styles';
import { renderDate } from 'client/utils';
import Markdown from 'client/components/markdown';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

type Props = {
  blog: {
    posts: Array<Post>,
  },
} & RouteProps;

const Title = styled(Type.heading)`
  ${margin.bottom('none')}
`;

const PostDate = styled(Type.paragraph)`
  ${margin.bottom('medium')}
`;

const BlogPost = ({ match }: Props) => {
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
    </article>
  );
};

export default BlogPost;
