// @flow

import type { Element } from 'react';
import type { Translate } from 'client/locales';
import { translator } from 'client/locales';
import React from 'react';

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
        {translate('head.title')}
      </title>

      {styles}
    </head>

    <body
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={renderInnerHtml(children)}
    />
  </html>
);

export default translator(Html);
