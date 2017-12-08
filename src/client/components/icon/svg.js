// @flow

import { prop } from 'styled-tools';
import styled from 'styled-components';

const Svg = styled.svg`
  height: ${prop('size')};
  width: ${prop('size')};
`;

export default Svg;
