// @flow

import type { Config } from 'common/types';
import type { Element } from 'react';
import type { StaticHelmet, Translate } from 'client/types';
import { getAssetUrl } from 'common/utils';
import React from 'react';
import translator from 'client/hocs/translator';

type Props = {
  baseUrl: string,
  children: string,
  clientConfig: Config,
  helmet: StaticHelmet,
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
  helmet,
  javascriptEnabled,
  styles,
  translate,
}: Props) => (
  <html {...helmet.htmlAttributes.toComponent()}>
    <head>
      <meta charSet={'utf-8'} />

      <meta
        content={'width=device-width, initial-scale=1, shrink-to-fit=no'}
        name={'viewport'}
      />

      {helmet.title.toComponent()}

      <meta
        content={'#000000'}
        name={'theme-color'}
      />

      <meta
        content={baseUrl + getAssetUrl('ben.jpn')}
        property={'og:image'}
      />

      <meta
        content={translate('meta.twitterHandle')}
        name={'twitter:creator'}
      />

      {helmet.meta.toComponent()}

      {helmet.link.toComponent()}

      {helmet.script.toComponent()}

      {helmet.style.toComponent()}

      {styles}
    </head>

    <body {...helmet.bodyAttributes.toComponent()}>
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
