import { Heading, Paragraph } from 'components/typography';
import { Link, graphql } from 'gatsby';
import PageLayout from 'components/page-layout';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const NotFound = ({ data }) => (
  <PageLayout baseUrl={data.site.siteMetadata.baseUrl}>
    <Container>
      <Heading>How did you get here?</Heading>

      <Paragraph>
        {'You should probably go '}
        <Link to={'/'}>home.</Link>
      </Paragraph>
    </Container>
  </PageLayout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        baseUrl
      }
    }
  }
`;

export default NotFound;
