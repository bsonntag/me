// @flow

import type { Config } from 'common/types';
import type { Element } from 'react';
import type { Translate } from 'client/locales';
import { getAssetUrl } from 'common/utils';
import { translator } from 'client/locales';
import React from 'react';

type Props = {
  baseUrl: string,
  children: string,
  clientConfig: Config,
  javascriptEnabled: boolean,
  styles: Array<Element<*>>,
  translate: Translate,
};

const renderInnerHtml = html => ({
  __html: html, // eslint-disable-line id-match
});

const renderConfig = (clientConfig: Config) => {
  const innerHtml = `window._config = ${JSON.stringify(clientConfig)};`;

  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={renderInnerHtml(innerHtml)}
      type={'text/javascript'}
    />
  );
};

const Html = ({
  baseUrl,
  children,
  clientConfig,
  javascriptEnabled,
  styles,
  translate,
}: Props) => (
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
        content={baseUrl}
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
        content={baseUrl + getAssetUrl('ben.jpn')}
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

      {javascriptEnabled && renderConfig(clientConfig)}

      {javascriptEnabled && (
        <script
          src={'/app.js'}
          type={'text/javascript'}
        />
      )}
    </body>
  </html>
);

export default translator(Html);
