const { get } = require('lodash');
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
      const next = get(posts, [index - 1, 'node']);
      const previous = get(posts, [index + 1, 'node']);

      actions.createPage({
        component: blogPostTemplate,
        context: { next, previous },
        path: node.frontmatter.path,
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
