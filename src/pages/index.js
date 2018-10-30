import { graphql } from 'gatsby';
import { translate } from 'locales';
import Blog from 'components/home/blog';
import PageLayout from 'components/page-layout';
import React from 'react';
import Type from 'components/type';

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    id: node.id,
    title: node.frontmatter.title,
    url: node.frontmatter.path,
  }));

  return (
    <PageLayout baseUrl={data.site.siteMetadata.baseUrl}>
      <Type.heading>
        {translate('home.heading')}
      </Type.heading>

      <section>
        <Type.title>
          {translate('home.whatIDo.title')}
        </Type.title>

        <Type.paragraph raw>
          {translate('home.whatIDo.description')}
        </Type.paragraph>
      </section>

      <section>
        <Type.title>
          {translate('home.work.title')}
        </Type.title>

        <Type.paragraph raw>
          {translate('home.work.description')}
        </Type.paragraph>
      </section>

      <section>
        <Type.title>
          {translate('home.blog.title')}
        </Type.title>
      </section>

      <Blog posts={posts} />
    </PageLayout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
    site {
      siteMetadata {
        baseUrl
      }
    }
  }
`;

export default Home;
