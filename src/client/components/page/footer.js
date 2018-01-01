// @flow

import { ExternalLink, Link } from 'client/components/links';
import type { Translate } from 'client/locales';
import { colors, margin, padding } from 'client/styles';
import { translator } from 'client/locales';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

type Props = {
  translate: Translate,
};

const renderCopyright = () => `© ${new Date().getFullYear()} `;

const Container = styled.footer`
  color: ${colors.textColor};
  margin: 0 auto;
  max-width: 1200px;

  ${padding.horizontal('large')}
`;

const Content = styled.div`
  border-top: 2px solid ${colors.secondary};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${padding.vertical('large')}

  > :not(:last-child) {
    ${margin.right('small')}
  }
`;

const Footer = ({ translate }: Props) => (
  <Container>
    <Content>
      <Type.caption>
        {renderCopyright()}

        <Link to={'/'}>
          {translate('name')}
        </Link>
      </Type.caption>

      <Type.caption>
        {translate('footer.builtWith')}

        <ExternalLink href={'https://reactjs.org/'}>
          {translate('footer.react')}
        </ExternalLink>

        {translate('footer.hostedOn')}

        <ExternalLink href={'https://pages.github.com/'}>
          {translate('footer.githubPages')}
        </ExternalLink>
      </Type.caption>
    </Content>
  </Container>
);

export default translator(Footer);
