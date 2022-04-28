/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps
} from 'react-router-dom';

import Layout from '../pages/Layout';

interface RouteProps extends ReactDOMRouteProps {
  component: React.FC;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export default Route;