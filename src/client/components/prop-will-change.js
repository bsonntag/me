import { Component } from 'react';
import { get } from 'lodash';

class PropWillChange extends Component {

  componentWillReceiveProps(nextProps) {
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
