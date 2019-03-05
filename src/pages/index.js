import { Heading, Paragraph, Title } from 'components/typography';
import { graphql } from 'gatsby';
import { translate } from 'locales';
import Blog from 'components/home/blog';
import PageLayout from 'components/page-layout';
import React from 'react';

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    id: node.id,
    title: node.frontmatter.title,
    url: node.frontmatter.path,
  }));

  return (
    <PageLayout baseUrl={data.site.siteMetadata.baseUrl}>
      <Heading>
        {translate('home.heading')}
      </Heading>

      <section>
        <Title>
          {translate('home.whatIDo.title')}
        </Title>

        <Paragraph raw>
          {translate('home.whatIDo.description')}
        </Paragraph>
      </section>

      <section>
        <Title>
          {translate('home.work.title')}
        </Title>

        <Paragraph raw>
          {translate('home.work.description')}
        </Paragraph>
      </section>

      <section>
        <Title>
          {translate('home.blog.title')}
        </Title>

        <Blog posts={posts} />
      </section>
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
