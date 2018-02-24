// @flow

import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'client/components/routing';
import type { TranslateProps } from 'client/types';
import Page from 'client/containers/page';
import React from 'react';
import Routes from 'client/containers/routes';
import translator from 'client/hocs/translator';

const titleTemplatePrefix = '%s - ';

const App = ({ translate }: TranslateProps) => (
  <Page>
    <Helmet
      defaultTitle={translate('meta.title')}
      titleTemplate={titleTemplatePrefix + translate('meta.title')}
    >
      <meta
        content={translate('meta.siteName')}
        property={'og:site_name'}
      />

      <meta
        content={translate('meta.description')}
        property={'og:description'}
      />
    </Helmet>

    <ScrollRestoration />

    <Routes />
  </Page>
);

export default translator(App);
