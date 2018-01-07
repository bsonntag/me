// @flow

import type { ComponentType } from 'react';
import type { Translate, TranslateProps } from 'client/types';
import { get } from 'lodash';
import React from 'react';
import locales from 'client/locales';

const translate: Translate = path => get(locales, path, path);

function translator<Props: {}>(Component: ComponentType<TranslateProps & Props>): ComponentType<Props> {
  const Translator = props => (
    <Component
      {...props}
      translate={translate}
    />
  );

  return Translator;
}

export default translator;
