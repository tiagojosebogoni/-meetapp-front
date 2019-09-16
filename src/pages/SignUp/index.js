import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup'
import logo from '../../assets/logo.svg';


export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string('Insira seu nome completo').required('Nome é obrigatório'),
    email: Yup.string()
      .email('Insira um email válido')
      .required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  function handleSubmit() {}

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <img src={logo} alt="logo" />

      <Input name="name" type="text" placeholder="Nome Completo" />
      <Input name="email" type="text" placeholder="Seu Email" />
      <Input name="password" type="password" placeholder="Sua Senha" />

      <button type="submit">Criar Conta</button>

      <Link to="/">Já tenho login</Link>
    </Form>
  );
}
