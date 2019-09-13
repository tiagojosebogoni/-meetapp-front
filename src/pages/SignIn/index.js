import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/logo.svg';
import * as Yup from 'yup';

export default function SignIn() {
  const schema = Yup.object().shape({
    email:Yup.string().email('Insira um email válido').required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória')
  })
  
  function handleSubmit() {}

  return (
    <>
      <img src={logo} alt="logo" />
      
      <Form schema={schema} onSubmit={handleSubmit}>

        <Input name="email" type="text" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Entrar</button>

        <Link to="/register">Criar Conta</Link>
      </Form>
    </>
  );
}
