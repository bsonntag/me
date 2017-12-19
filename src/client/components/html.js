// @flow

import type { Element } from 'react';
import type { Translate } from 'client/locales';
import { getAssetUrl } from 'common/utils';
import { translator } from 'client/locales';
import React from 'react';
import config from 'config';

type Props = {
  children: string,
  styles: Array<Element<*>>,
  translate: Translate,
};

const renderInnerHtml = html => ({
  __html: html, // eslint-disable-line id-match
});

const Html = ({ children, styles, translate }: Props) => (
  <html>
    <head>
      <meta charSet={'utf-8'} />

      <meta
        content={'width=device-width, initial-scale=1, shrink-to-fit=no'}
        name={'viewport'}
      />

      <meta
        content={'#000000'}
        name={'theme-color'}
      />

      <title>
        {translate('meta.title')}
      </title>

      <meta
        content={config.get('baseUrl')}
        property={'og:url'}
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
        content={config.get('baseUrl') + getAssetUrl('ben.jpn')}
        property={'og:image'}
      />

      <meta
        content={translate('meta.twitterHandle')}
        name={'twitter:creator'}
      />

      {styles}
    </head>

    <body>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={renderInnerHtml(children)}
        id={'root'}
      />

      {config.get('javascriptEnabled') && (
        <script
          src={'/app.js'}
          type={'text/javascript'}
        />
      )}
    </body>
  </html>
);

export default translator(Html);
