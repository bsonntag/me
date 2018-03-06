// @flow

import { Component } from 'react';
import { get } from 'lodash';

type Props = {
  onChange: any => void,
  propName: string,
};

class PropWillChange extends Component<Props> {

  componentWillReceiveProps(nextProps: Props) {
    const { propName, onChange } = nextProps;

    const newValue = get(nextProps, propName);
    const oldValue = get(this.props, propName);

    if (newValue !== oldValue) {
      onChange(nextProps);
    }
  }

  render() {
    return null;
  }

}

export default PropWillChange;
