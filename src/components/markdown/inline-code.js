import { codeFontFamily } from 'styles/code';
import { spacing } from 'styles/spacing';
import React from 'react';
import colors from 'styles/colors';
import styled from 'styled-components';

const Code = styled.code`
  background-color: ${colors.secondaryLight};
  border-radius: 4px;
  font-family: ${codeFontFamily};
  padding-left: ${spacing.tiny};
  padding-right: ${spacing.tiny};
  vertical-align: bottom;
`;

const InlineCode = props => <Code {...props} />;

export default InlineCode;
