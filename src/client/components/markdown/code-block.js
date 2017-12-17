// @flow

import { colors, margin, padding } from 'client/styles';
import React from 'react';
import styled from 'styled-components';

type Props = {
  language: string,
  value: string,
};

const Pre = styled.pre`
  background-color: ${colors.secondaryLight};
  border-radius: 4px;
  font-family: 'Source Code Pro', monospace;
  max-width: 100%;
  overflow-x: auto;

  ${margin.vertical('small')}
  ${padding('small')}
`;

const Code = styled.code`
  font-family: 'Source Code Pro', monospace;
`;

const CodeBlock = ({ value }: Props) => (
  <Pre>
    <Code>
      {value}
    </Code>
  </Pre>
);

export default CodeBlock;
