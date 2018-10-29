import { Helmet } from 'react-helmet';
import { ScrollRestoration } from 'client/components/routing';
import { Translator } from 'client/containers/translations';
import Page from 'client/containers/page';
import React from 'react';
import Routes from 'client/containers/routes';

const titleTemplatePrefix = '%s - ';

const App = () => (
  <Page>
    <Translator>
      {translate => (
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
      )}
    </Translator>

    <ScrollRestoration />

    <Routes />
  </Page>
);

export default App;
