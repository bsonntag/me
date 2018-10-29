import { graphql } from 'gatsby';
import { margin } from 'styles';
import { translate } from 'locales';
import Blog from 'components/home/blog';
import PageLayout from 'components/page-layout';
import React from 'react';
import Type from 'components/type';
import styled from 'styled-components';

const Section = styled.div`
  &:not(:last-child) {
    ${margin.bottom('medium')}
  }
`;

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter.date,
    id: node.id,
    title: node.frontmatter.title,
    url: node.frontmatter.path,
  }));

  return (
    <PageLayout>
      <Type.heading>
        {translate('home.heading')}
      </Type.heading>

      <Section>
        <Type.title>
          {translate('home.whatIDo.title')}
        </Type.title>

        <Type.paragraph raw>
          {translate('home.whatIDo.description')}
        </Type.paragraph>
      </Section>

      <Section>
        <Type.title>
          {translate('home.work.title')}
        </Type.title>

        <Type.paragraph raw>
          {translate('home.work.description')}
        </Type.paragraph>
      </Section>

      <Section>
        <Type.title>
          {translate('home.blog.title')}
        </Type.title>
      </Section>

      <Blog posts={posts} />
    </PageLayout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
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
  }
`;

export default Home;
