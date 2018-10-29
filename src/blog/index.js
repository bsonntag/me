import { capitalize, get, keys, words } from 'lodash/fp';
import functionalReact from './2017-12-17-functional-react.md';

const fileNameRegex = /^(\d{4}-\d{2}-\d{2})-([\w-]*)$/;

const blogPosts = {
  '2017-12-17-functional-react': functionalReact,
};

function createPost(id) {
  const [, rawDate, rawTitle] = id.match(fileNameRegex) || [];
  const title = words(rawTitle)
    .map(capitalize)
    .join(' ');

  return {
    date: new Date(rawDate),
    id,
    title,
    url: `/blog/${id}`,
  };
}

export function getPostList() {
  return keys(blogPosts)
    .map(createPost);
}

export const getBlogPost = postId => ({
  ...createPost(postId),
  content: get(postId, blogPosts),
});
