import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';

export default function SignUp() {
  function handleSubmit() {}

  return (
    <Form onSubmit={handleSubmit}>
      <img src={logo} alt="logo" />

      <Input name="name" type="text" placeholder="Nome Completo" />
      <Input name="email" type="text" placeholder="Seu Email" />
      <Input name="password" type="password" placeholder="Sua Senha" />

      <button type="submit">Criar Conta</button>

      <Link to="/">Já tenho login</Link>
    </Form>
  );
}
