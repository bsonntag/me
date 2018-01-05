// @flow

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import withPropWillChange from 'client/hocs/with-prop-will-change';

export default compose(
  withRouter,
  withPropWillChange(
    'location.pathname',
    () => window.scrollTo(0, 0)
  )
)(() => null);
