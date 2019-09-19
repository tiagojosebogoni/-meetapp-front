import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit() {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua antiga senha"
        />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="button">
          <div>
            <MdAddCircleOutline size={16} />
            <span>Salvar perfil</span>
          </div>
        </button>
      </Form>
    </Container>
  );
}
