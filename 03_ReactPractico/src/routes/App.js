import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from '../components/Register';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
