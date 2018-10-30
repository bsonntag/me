import { Link } from 'gatsby';
import { margin } from 'styles/spacing';
import { renderDate } from 'utils/date';
import React from 'react';
import Type from 'components/type';
import styled from 'styled-components';

const PostTitle = styled(Type.subheading)`
  ${margin.bottom('none')}
`;

const Blog = ({ posts }) => posts.map(post => (
  <div key={post.id}>
    <Link to={post.url}>
      <PostTitle>
        {post.title}
      </PostTitle>
    </Link>

    <Type.paragraph>
      {renderDate(post.date)}
    </Type.paragraph>
  </div>
));

export default Blog;
