// @flow

import type { Config } from 'common/types';
import type { RouteProps } from 'client/types';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import React from 'react';
import Remarkbox from './remarkbox';
import styled from 'styled-components';
import withConfig from 'client/hocs/with-config';

type Props = {
  config: Config,
} & RouteProps;

const StyledRemarkbox = styled(Remarkbox)`
  margin-bottom: -32px;
  min-height: 184px;
  min-width: 100%;
  width: 1px;
`;

const CommentBox = ({ config, location }: Props) => (
  <StyledRemarkbox
    remarkboxKey={config.get('remarkbox.key')}
    threadFragment={location.hash}
    threadUri={location.href}
  />
);

export default compose(
  withConfig,
  withRouter
)(CommentBox);
