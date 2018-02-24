// @flow

import type { Element } from 'react';
import type { StaticHelmet, Translate } from 'client/types';
import { resolve } from 'url';
import React from 'react';
import ben from 'assets/ben.jpg';
import config from 'common/config';
import translator from 'client/hocs/translator';

type Props = {
  children: string,
  helmet: StaticHelmet,
  styles: Array<Element<*>>,
  translate: Translate,
};

const renderInnerHtml = html => ({
  __html: html, // eslint-disable-line id-match
});

const Html = ({ children, helmet, styles, translate }: Props) => (
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

      <script
        src={'/static/app.js'}
        type={'text/javascript'}
      />
    </body>
  </html>
);

export default translator(Html);
