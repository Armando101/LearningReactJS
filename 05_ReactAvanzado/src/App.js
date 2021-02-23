import React from 'react';
import { Router } from '@reach/router';
import { Logo } from '@components/Logo';
import { NavBar } from '@components/NavBar';
import { GlobalStyles } from '@styles/GlobalStyles';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisterUser from './pages/NotRegisterUser';

const UserLogged = ({ children }) => {
  return children({ isAuth: false });
};

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
      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/user" />
              <NotRegisterUser path="/favs" />
            </Router>
          )
        }
      </UserLogged>
      <NavBar />
    </div>
  );
};
