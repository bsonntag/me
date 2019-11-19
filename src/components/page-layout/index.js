import { contentSize, spacing } from 'styles/spacing';
import Footer from './footer';
import GlobalStyle from 'components/global-style';
import Header from './header';
import Metatags from 'components/metatags';
import React from 'react';
import SkipLink from 'components/links/skip-link';
import colors from 'styles/colors';
import styled from 'styled-components';

const Main = styled.main`
  color: ${colors.textColor};
  margin: 0 auto;
  max-width: ${contentSize}rem;
  padding: ${spacing.medium} ${spacing.small};
`;

const PageLayout = ({ baseUrl, children }) => (
  <>
    <Metatags baseUrl={baseUrl} />
    <GlobalStyle />

    <SkipLink href={'#main'}>Skip to content</SkipLink>
    <Header />
    <Main id={'main'}>{children}</Main>
    <Footer />
  </>
);

export default PageLayout;
