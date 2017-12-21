// @flow

import type { ComponentType } from 'react';
import { get } from 'lodash/fp';
import { isProduction } from 'common/utils';
import { setDisplayName, wrapDisplayName } from 'recompose';
import React, { Component } from 'react';

function withPropWillChange<P, C: ComponentType<P>>(
  propName: string,
  onPropChange: P => void
) {
  return (Wrapped: C) => {
    const displayName = wrapDisplayName(Wrapped, 'withPropWillChange');
    const getProp = get(propName);

    class Wrapper extends Component<P> {

      componentWillReceiveProps(nextProps: P) {
        const newValue = getProp(nextProps);
        const oldValue = getProp(this.props);

        if (newValue !== oldValue) {
          onPropChange(nextProps);
        }
      }

      render() {
        return <Wrapped {...this.props} />;
      }

    }

    if (!isProduction()) {
      return setDisplayName(displayName)(Wrapper);
    }

    return Wrapper;
  };
}

export default withPropWillChange;
