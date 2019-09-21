import React, { useState, useEffect } from 'react';

import { MdAddCircle, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Header, MeetupsItems } from './styles';
import api from '../../services/api';
import history from '../../services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  function handleClick() {
    return history.push('newEdit ');
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const { data } = response;

      setMeetups(data);
    }

    loadMeetups();
  }, [meetups]);

  return (
    <Container>
      <Header>
        <strong>Meus Meetups</strong>
        <button type="button" onClick={handleClick}>
          <div>
            <MdAddCircle size={18} color="#fff" />
            <span>Novo meetup</span>
          </div>
        </button>
      </Header>
      <ul>
        {meetups.map(meetup => (
          <MeetupsItems key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.formattedDate}</span>
              <MdKeyboardArrowRight size={20} />
            </div>
          </MeetupsItems>
        ))}
      </ul>
    </Container>
  );
}
