import React from 'react';
import Context from '../Context';

export default function NotRegisterUser() {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar sesión</button>
          </form>
        );
      }}
    </Context.Consumer>
  );
}
