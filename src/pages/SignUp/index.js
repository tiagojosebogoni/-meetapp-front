import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string('Insira seu nome completo').required('Nome é obrigatório'),
    email: Yup.string()
      .email('Insira um email válido')
      .required('Email é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

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
