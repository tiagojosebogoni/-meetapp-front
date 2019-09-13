import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes/index';
import GlobalStyle from './styles/global';

import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
