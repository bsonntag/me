// @flow

import { Link } from 'react-router-dom';
import type { Post } from 'blog';
import { renderDate } from 'client/utils';
import React from 'react';
import Type from 'client/components/type';

type Props = {
  posts: Array<Post>,
};

const Blog = ({ posts }: Props) => posts.map(post => (
  <div key={post.id}>
    <Link to={post.url}>
      <Type.subheading>
        {post.title}
      </Type.subheading>
    </Link>

    <Type.paragraph>
      {renderDate(post.date)}
    </Type.paragraph>
  </div>
));

export default Blog;
