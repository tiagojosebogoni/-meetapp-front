import React from 'react';
import { MdAddCircle, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Header } from './styles';

// import { Container } from './styles';

export default function Dashboard() {
  function handleClick() {}

  return (
    <Container>
      <Header>
        <strong>Meus Meetups</strong>
        <button type="button" onClick={handleClick}>
          <div>
            <MdAddCircle size={26} color="#fff" />
            <span>Novo meetup</span>
          </div>
        </button>
      </Header>
      <ul>
        <li>
          <strong>Meetup</strong>
          <span>Em aberto</span>
          <MdKeyboardArrowRight size={20} />
        </li>
        <li>
          <strong>Meetup</strong>
          <span>
            Em aberto
            <MdKeyboardArrowRight size={20} />
          </span>
        </li>
        <li>
          <strong>Meetup</strong>
          <span>Em aberto</span>
          <MdKeyboardArrowRight size={20} />
        </li>
        <li>
          <strong>Meetup</strong>
          <span>Em aberto</span>
          <MdKeyboardArrowRight size={20} />
        </li>
      </ul>
    </Container>
  );
}
