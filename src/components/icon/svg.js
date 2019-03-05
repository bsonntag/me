import { prop } from 'styled-tools';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  height: ${prop('size')};
  width: ${prop('size')};
`;

export default Svg;
