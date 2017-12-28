// @flow

import type { ComponentType } from 'react';
import { get } from 'lodash';
import React from 'react';
import locales from './en';

export type Translate = string => string;

export type TranslateProps = {
  translate: Translate,
};

const translate: Translate = path => get(locales, path, path);

export function translator<Props: {}>(Component: ComponentType<TranslateProps & Props>): ComponentType<Props> {
  return function Translator(props) {
    return (
      <Component
        {...props}
        translate={translate}
      />
    );
  };
}
