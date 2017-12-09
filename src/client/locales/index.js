// @flow

import type { ComponentType } from 'react';
import { get } from 'lodash';
import React from 'react';
import locales from './en';

export type Translate = string => string;

type TranslatorProps = {
  translate: Translate,
};

const translate: Translate = path => get(locales, path, path);

export function translator<Props: {}>(Component: ComponentType<TranslatorProps & Props>): ComponentType<Props> {
  return function Translator(props) {
    return (
      <Component
        {...props}
        translate={translate}
      />
    );
  };
}
