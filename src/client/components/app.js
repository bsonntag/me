// @flow

import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { ScrollRestoration } from 'client/components/routing';
import type { TranslateProps } from 'client/locales';
import { translator } from 'client/locales';
import BlogPost from 'client/components/pages/blog-post';
import Home from 'client/components/pages/home';
import NotFound from 'client/components/pages/not-found';
import Page from 'client/components/page';
import React from 'react';

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

    <Switch>
      <Route
        component={BlogPost}
        path={'/blog/:postId'}
      />

      <Route
        component={Home}
        exact
        path={'/'}
      />

      <Route component={NotFound} />
    </Switch>
  </Page>
);

export default translator(App);
