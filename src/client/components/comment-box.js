// @flow

import { Route } from 'react-router-dom';
import React from 'react';
import Remarkbox from 'react-remarkbox';
import config from 'common/config';
import styled from 'styled-components';

const StyledRemarkbox = styled(Remarkbox)`
  margin-bottom: -32px;
  min-height: 184px;
  min-width: 100%;
  width: 1px;
`;

const CommentBox = () => (
  <Route>
    {({ location }) => (
      <StyledRemarkbox
        remarkboxKey={config.remarkboxKey}
        threadFragment={location.hash}
        threadUri={config.baseUrl + location.pathname}
      />
    )}
  </Route>
);

export default CommentBox;
