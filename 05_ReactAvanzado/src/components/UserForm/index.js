import React from 'react';
import { useInputValue } from '@hooks/useInputValue';
import { Button, Form, Input, Title } from './styles';

export function UserForm({ onSubmit, title }) {
  const email = useInputValue('');
  const password = useInputValue('');
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Email" {...email} type="text" />
        <Input placeholder="Password" {...password} type="password" />
        <Button>{title}</Button>
      </Form>
    </>
  );
}
