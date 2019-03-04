import { contentSize, spacing } from 'styles/spacing';
import Footer from './footer';
import GlobalStyle from 'components/global-style';
import Header from './header';
import Metatags from 'components/metatags';
import React from 'react';
import colors from 'styles/colors';
import styled from 'styled-components';

const Content = styled.main`
  color: ${colors.textColor};
  margin: 0 auto;
  max-width: ${contentSize}rem;
  margin-bottom: ${spacing.large};
  margin-top: ${spacing.large};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`;

const PageLayout = ({ baseUrl, children }) => (
  <>
    <Metatags baseUrl={baseUrl} />

    <GlobalStyle />

    <Header />

    <Content>
      {children}
    </Content>

    <Footer />
  </>
);

export default PageLayout;
