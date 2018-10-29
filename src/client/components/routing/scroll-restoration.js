import { Route } from 'react-router-dom';
import PropWillChange from 'client/components/prop-will-change';
import React from 'react';

const scrollToTop = () => window.scrollTo(0, 0);

const ScrollRestoration = () => (
  <Route>
    {routeProps => (
      <PropWillChange
        {...routeProps}
        onChange={scrollToTop}
        propName={'location.pathname'}
      />
    )}
  </Route>
);

export default ScrollRestoration;
