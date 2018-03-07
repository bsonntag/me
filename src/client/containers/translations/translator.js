// @flow

import type { Element } from 'react';
import { translate } from 'client/locales';

type Props = {
  children: (string => string) => Element<*>,
};

export const Translator = ({ children }: Props) => children(translate);
