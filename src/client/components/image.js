// @flow

import { ifProp, prop } from 'styled-tools';
import { isProduction } from 'common/utils';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string,
  fileName: string,
  round?: boolean,
  size: string,
};

const assetPath = fileName => {
  if (isProduction()) {
    return fileName;
  }

  return `assets/${fileName}`;
};

const Img = styled.img`
  height: ${prop('size')};
  width: ${prop('size')};

  ${ifProp('round', 'border-radius: 50%')}
`;

const Image = ({ fileName, ...rest }: Props) => (
  <Img
    src={assetPath(fileName)}
    {...rest}
  />
);

export default Image;
