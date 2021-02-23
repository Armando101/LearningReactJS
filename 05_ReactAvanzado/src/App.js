import React from 'react';
import { Router } from '@reach/router';
import { Logo } from '@components/Logo';
import { GlobalStyles } from '@styles/GlobalStyles';
import Home from './pages/Home';
import Detail from './pages/Detail';

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
    </div>
  );
};
