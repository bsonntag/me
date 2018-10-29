import { ExternalLink, Link } from 'client/components/links';
import { Translate } from 'client/containers/translations';
import { colors, margin, padding } from 'client/styles';
import React from 'react';
import Type from 'client/components/type';
import styled from 'styled-components';

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

const Footer = () => (
  <Container>
    <Content>
      <Type.caption>
        {renderCopyright()}

        <Link to={'/'}>
          <Translate path={'name'} />
        </Link>
      </Type.caption>

      <Type.caption>
        <Translate path={'footer.builtWith'} />

        <ExternalLink href={'https://reactjs.org/'}>
          <Translate path={'footer.react'} />
        </ExternalLink>

        <Translate path={'footer.hostedOn'} />

        <ExternalLink href={'https://www.netlify.com/'}>
          <Translate path={'footer.host'} />
        </ExternalLink>
      </Type.caption>
    </Content>
  </Container>
);

export default Footer;
