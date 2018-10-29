// @flow

import { colors, padding } from 'client/styles';
import Footer from './footer';
import Header from './header';
import React, { Fragment, type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
};

const Content = styled.main`
  color: ${colors.textColor};
  margin: 0 auto;
  max-width: 1200px;

  ${padding('large')}
`;

const Page = ({ children }: Props) => (
  <Fragment>
    <Header />

    <Content>
      {children}
    </Content>

    <Footer />
  </Fragment>
);

export default Page;
