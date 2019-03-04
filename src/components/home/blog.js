import { Link } from 'gatsby';
import { margin } from 'styles/spacing';
import { renderDate } from 'utils/date';
import React from 'react';
import Type from 'components/type';
import styled from 'styled-components';

const PostTitle = styled(Type.subheading)`
  ${margin.bottom('none')}
`;

const Blog = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostTitle>
          <Link to={post.url}>
            {post.title}
          </Link>
        </PostTitle>

        <Type.paragraph>
          {renderDate(post.date)}
        </Type.paragraph>
      </li>
    ))}
  </ul>
);

export default Blog;
