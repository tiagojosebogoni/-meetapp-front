import React from 'react';
import { Provider } from 'reactotron-redux';
import { Router } from 'react-router-dom';
import './config/Reactotron';

import Routes from './routes/index';
import history from './services/history';

import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
     <Provider store={store}>

      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider> 
  );
}

export default App;
