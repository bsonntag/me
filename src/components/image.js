import { ifProp, prop } from 'styled-tools';
import styled from 'styled-components';

const Image = styled.img`
  height: ${prop('size')};
  width: ${prop('size')};

  ${ifProp('round', 'border-radius: 50%;')}
`;

export default Image;
