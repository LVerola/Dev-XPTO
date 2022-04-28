import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Budgets from '../pages/Budgets';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/services" exact component={Services} />
      <Route path="/budgets" exact component={Budgets} />
      <Route path="*" exact component={Home} />
    </Switch>
  );
};

export default Routes;