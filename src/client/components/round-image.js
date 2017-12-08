// @flow

import { colors, units } from 'client/styles';
import React from 'react';
import styled from 'styled-components';

/**
 * `Props` type.
 */

type Props = {
  className?: string,
};

const size = units(15);

const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 50%;
  height: ${size};
  width: ${size};
`;

const RoundImage = (props: Props) => (
  <Container {...props} />
);

export default RoundImage;
