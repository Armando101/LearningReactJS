import React from 'react';
import Context from '../Context';
import { UserForm } from '@components/UserForm';

export default function NotRegisterUser() {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <>
            <UserForm title="Registrarse" onSumbit={activateAuth} />
            <UserForm title="Iniciar Sesión" onSumbit={activateAuth} />
          </>
        );
      }}
    </Context.Consumer>
  );
}
