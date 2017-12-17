// @flow

import type { Node } from 'react';
import { colors, padding } from 'client/styles';
import Footer from './footer';
import Header from './header';
import React from 'react';
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
  <div>
    <Header />

    <Content>
      {children}
    </Content>

    <Footer />
  </div>
);

export default Page;
