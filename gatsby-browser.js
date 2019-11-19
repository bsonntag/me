import React, { Fragment } from 'react';

let TypeGrid = Fragment;

if (process.env.NODE_ENV !== 'production') {
  TypeGrid = require('./src/components/type-grid.js').default;
}

export const wrapPageElement = ({ element }) => <TypeGrid>{element}</TypeGrid>;
