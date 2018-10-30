import { colors, padding } from 'styles';
import Footer from './footer';
import GlobalStyle from 'components/global-style';
import Header from './header';
import Metatags from 'components/metatags';
import React, { Fragment } from 'react';
import styled from 'styled-components';

const Content = styled.main`
  color: ${colors.textColor};
  margin: 0 auto;
  max-width: 1200px;

  ${padding('large')}
`;

const PageLayout = ({ baseUrl, children }) => (
  <Fragment>
    <Metatags baseUrl={baseUrl} />

    <GlobalStyle />

    <Header />

    <Content>
      {children}
    </Content>

    <Footer />
  </Fragment>
);

export default PageLayout;
