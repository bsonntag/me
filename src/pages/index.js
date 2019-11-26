import { Paragraph, SubTitle, Title } from 'components/typography';
import { graphql } from 'gatsby';
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
      <SubTitle as={'p'}>
        {`Hello, I'm Benjamim Sonntag, a web developer and `}
        <a href={'https://bsonntag-concerts.netlify.com'}>metalhead.</a>
      </SubTitle>

      <section>
        <Title>What I do</Title>

        <Paragraph>
          I mostly do frontend work using React and Redux, but I also do some
          backend in Node and sometimes play around with Electron.
          <br />
          Ever since I learned JavaScript I&apos;ve been using it for pretty
          much everything, from small scripts to full web applications.
        </Paragraph>
      </section>

      <section>
        <Title>Work</Title>

        <Paragraph>
          {`I'm currently working at `}

          <a
            href={'https://seegno.com'}
            rel={'noreferrer noopener'}
            target={'_blank'}
          >
            Seegno
          </a>

          {' doing some awesome stuff. Before that, I helped '}

          <a
            href={'https://sioslife.com'}
            rel={'noreferrer noopener'}
            target={'_blank'}
          >
            siosLIFE
          </a>

          {' bring technology to the elderly.'}
        </Paragraph>
      </section>

      <section>
        <Title>Blog</Title>

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
