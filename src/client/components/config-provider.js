// @flow

import { pick } from 'lodash/fp';
import { withContext } from 'recompose';
import PropTypes from 'prop-types';

const ConfigProvider = ({ children }) => children;

export default withContext(
  { config: PropTypes.object.isRequired },
  pick('config'),
)(ConfigProvider);
