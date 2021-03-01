import React from 'react';
import { useInputValue } from '@hooks/useInputValue';

export function UserForm({ onSubmit }) {
  const email = useInputValue('');
  const password = useInputValue('');
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Email" {...email} type="text" />
      <input placeholder="Password" {...password} type="password" />
      <button>Iniciar sesión</button>
    </form>
  );
}
