// @flow

import { getAssetUrl } from 'common/utils';
import { ifProp, prop } from 'styled-tools';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string,
  fileName: string,
  round?: boolean,
  size: string,
};

const Img = styled.img`
  height: ${prop('size')};
  width: ${prop('size')};

  ${ifProp('round', 'border-radius: 50%')}
`;

const Image = ({ fileName, ...rest }: Props) => (
  <Img
    src={getAssetUrl(fileName)}
    {...rest}
  />
);

export default Image;
