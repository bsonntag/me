import { Heading, Paragraph } from 'components/typography';
import { Link, graphql } from 'gatsby';
import { translate } from 'locales';
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
  <PageLayout baseUrl={data.site.siteMetadata.baseUrl} >
    <Container>
      <Heading>
        {translate('notFound.title')}
      </Heading>

      <Paragraph>
        {translate('notFound.go')}

        <Link to={'/'}>
          {translate('notFound.home')}
        </Link>
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
