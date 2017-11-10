import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Containers/Homepage';
import About from './Containers/About';
import Skills from './Containers/Skills';
import Portfolios from './Containers/Portfolios';
import Contacts from './Containers/Contacts';

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/About" component={About} />
    <Route path="/Skills" component={Skills} />
    <Route path="/Portfolios" component={Portfolios} />
    <Route path="/Contacts" component={Contacts} />
  </Switch>
);

export default MainRoutes;
