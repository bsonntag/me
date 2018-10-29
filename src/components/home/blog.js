import { Link } from 'gatsby';
import { renderDate } from 'utils/date';
import React from 'react';
import Type from 'components/type';

const Blog = ({ posts }) => posts.map(post => (
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
