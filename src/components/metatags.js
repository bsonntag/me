import { Helmet } from 'react-helmet';
import { resolve } from 'url';
import React from 'react';
import ben from 'images/ben.jpg';

const titleTemplatePrefix = '%s - ';
const name = 'Benjamim Sonntag';
const description = `The personal webpage of ${name}.`;

const Metatags = ({ baseUrl }) => (
  <Helmet
    defaultTitle={name}
    titleTemplate={titleTemplatePrefix + name}
  >
    <meta
      content={name}
      property={'author'}
    />

    <meta
      content={description}
      property={'description'}
    />

    <meta
      content={resolve(baseUrl, ben)}
      property={'og:image'}
    />

    <meta
      content={'bsonntag.me'}
      property={'og:site_name'}
    />

    <meta
      content={description}
      property={'og:description'}
    />

    <meta
      content={'@benjamimsonntag'}
      name={'twitter:creator'}
    />
  </Helmet>
);

export default Metatags;
