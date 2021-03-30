import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Root } from './containers/Root';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
