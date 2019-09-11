import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Input} from '@rocketseat/unform'

export default function SignIn() {
  return (
    <Form>
      <Input name="email" type="text" placeholder="Seu Email"/>
      <Input name="password" type="password" placeholder="Seu Email"/>

      <button type="submit">Login</button>

      <Link to="/register">Criar Conta</Link>
    </Form>
  );
}
