import { Helmet } from 'react-helmet';
import { resolve } from 'url';
import { translate } from 'locales';
import React from 'react';
import ben from 'images/ben.jpg';

const titleTemplatePrefix = '%s - ';

const Metatags = ({ baseUrl }) => (
  <Helmet
    defaultTitle={translate('meta.title')}
    titleTemplate={titleTemplatePrefix + translate('meta.title')}
  >
    <meta
      content={translate('meta.author')}
      property={'author'}
    />

    <meta
      content={translate('meta.description')}
      property={'description'}
    />

    <meta
      content={resolve(baseUrl, ben)}
      property={'og:image'}
    />

    <meta
      content={translate('meta.siteName')}
      property={'og:site_name'}
    />

    <meta
      content={translate('meta.description')}
      property={'og:description'}
    />

    <meta
      content={translate('meta.twitterHandle')}
      name={'twitter:creator'}
    />
  </Helmet>
);

export default Metatags;
