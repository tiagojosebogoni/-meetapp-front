import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { Container } from './styles';

export default function NewEdit() {
  return (
    <Container>
      <Form>
        <FileInput name="attach" onStartProgress="" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <div>
          <button type="button">
            <div>
              <MdAddCircleOutline size={16} />
              <span>Salvar perfil</span>
            </div>
          </button>
        </div>
      </Form>
    </Container>
  );
}
