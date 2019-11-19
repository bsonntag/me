import { Link } from 'gatsby';
import { Paragraph, SubTitle } from 'components/typography';
import { renderDate } from 'utils/date';
import React from 'react';
import styled from 'styled-components';

const PostTitle = styled(SubTitle)`
  margin-bottom: 0;
`;

const Blog = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostTitle>
          <Link to={post.url}>{post.title}</Link>
        </PostTitle>

        <Paragraph>{renderDate(post.date)}</Paragraph>
      </li>
    ))}
  </ul>
);

export default Blog;
