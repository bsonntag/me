import { Caption } from 'components/typography';
import { ExternalLink, Link } from 'components/links';
import { contentSize, spacing } from 'styles/spacing';
import { translate } from 'locales';
import React from 'react';
import colors from 'styles/colors';
import styled from 'styled-components';

const renderCopyright = () => `© ${new Date().getFullYear()} `;

const Container = styled.footer`
  color: ${colors.textColor};
  margin: 0 auto;
  max-width: ${contentSize}rem;
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`;

const Content = styled.div`
  border-top: 2px solid ${colors.secondary};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-bottom: ${spacing.large};
  padding-top: ${spacing.large};

  > :not(:last-child) {
    margin-right: ${spacing.small};
  }
`;

const Footer = () => (
  <Container>
    <Content>
      <Caption>
        {renderCopyright()}

        <Link to={'/'}>
          {translate('name')}
        </Link>
      </Caption>

      <Caption>
        {translate('footer.builtWith')}

        <ExternalLink href={'https://www.gatsbyjs.org/'}>
          {translate('footer.tech')}
        </ExternalLink>

        {translate('footer.hostedOn')}

        <ExternalLink href={'https://www.netlify.com/'}>
          {translate('footer.host')}
        </ExternalLink>
      </Caption>
    </Content>
  </Container>
);

export default Footer;
