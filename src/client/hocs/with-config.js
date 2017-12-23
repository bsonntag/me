// @flow

import { getContext } from 'recompose';
import PropTypes from 'prop-types';

export default getContext({
  config: PropTypes.object.isRequired,
});
