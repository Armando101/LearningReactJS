import React from 'react';
import Context from '../Context';
import { UserForm } from '@components/UserForm';

export default function NotRegisterUser() {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return <UserForm onSumbit={activateAuth} />;
      }}
    </Context.Consumer>
  );
}
