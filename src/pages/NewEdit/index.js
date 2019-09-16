import React from 'react';
import { Form, Input } from '@rocketseat/unform';
// import { Container } from './styles';

export default function NewEdit() {
  return (
    <Form>
      <Input name="title" />
      <Input name="description" />
      <Input name="date" />
      <Input name="location" />
    </Form>
  );
}
