// @flow

import { colors, padding } from 'client/styles';
import styled from 'styled-components';

export default styled.code`
  background-color: ${colors.secondaryLight};
  border-radius: 4px;
  font-family: 'Source Code Pro' , monospace;

  ${padding.horizontal('tiny')}
`;
