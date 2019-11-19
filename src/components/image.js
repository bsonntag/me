import { ifProp, prop } from 'styled-tools';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

const Image = styled(GatsbyImage)`
  height: ${prop('size')};
  width: ${prop('size')};

  ${ifProp('round', 'border-radius: 50%;')}
`;

export default Image;
