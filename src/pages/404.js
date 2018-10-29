import { Link } from 'gatsby';
import { translate } from 'locales';
import PageLayout from 'components/page-layout';
import React from 'react';
import Type from 'components/type';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const NotFound = () => (
  <PageLayout>
    <Container>
      <Type.heading>
        {translate('notFound.title')}
      </Type.heading>

      <Type.paragraph>
        {translate('notFound.go')}

        <Link to={'/'}>
          {translate('notFound.home')}
        </Link>
      </Type.paragraph>
    </Container>
  </PageLayout>
);

export default NotFound;
