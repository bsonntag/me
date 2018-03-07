// @flow

import type { Element } from 'react';
import type { StaticHelmet } from 'client/types';
import { Translator } from 'client/containers/translations';
import { resolve } from 'url';
import React from 'react';
import ben from 'assets/ben.jpg';
import config from 'common/config';

type Props = {
  children: string,
  helmet: StaticHelmet,
  styles: Array<Element<*>>,
};

const renderInnerHtml = html => ({
  __html: html, // eslint-disable-line id-match
});

const Html = ({ children, helmet, styles }: Props) => (
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
        content={resolve(config.baseUrl, ben)}
        property={'og:image'}
      />

      <Translator>
        {translate => (
          <meta
            content={translate('meta.twitterHandle')}
            name={'twitter:creator'}
          />
        )}
      </Translator>

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

      <script
        src={'/static/app.js'}
        type={'text/javascript'}
      />
    </body>
  </html>
);

export default Html;
