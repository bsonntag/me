import { ExternalLink, Link } from 'components/links';
import { colors, margin, padding } from 'styles';
import { translate } from 'locales';
import React from 'react';
import Type from 'components/type';
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
          {translate('name')}
        </Link>
      </Type.caption>

      <Type.caption>
        {translate('footer.builtWith')}

        <ExternalLink href={'https://www.gatsbyjs.org/'}>
          {translate('footer.tech')}
        </ExternalLink>

        {translate('footer.hostedOn')}

        <ExternalLink href={'https://www.netlify.com/'}>
          {translate('footer.host')}
        </ExternalLink>
      </Type.caption>
    </Content>
  </Container>
);

export default Footer;
