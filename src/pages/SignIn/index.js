import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';

export default function SignIn() {
  function handleSubmit() {}

  return (
    <Form onSubmit={handleSubmit}>
      <img src={logo} alt="logo" />

      <Input name="email" type="text" placeholder="Seu Email" />
      <Input name="password" type="password" placeholder="Sua Senha" />

      <button type="submit">Entrar</button>

      <Link to="/register">Criar Conta</Link>
    </Form>
  );
}
