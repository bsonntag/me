import { codeFontFamily, colors, padding } from 'styles';
import React from 'react';
import styled from 'styled-components';

const Code = styled.code`
  background-color: ${colors.secondaryLight};
  border-radius: 4px;
  font-family: ${codeFontFamily};

  ${padding.horizontal('tiny')}
`;

const InlineCode = props => <Code {...props} />;

export default InlineCode;
