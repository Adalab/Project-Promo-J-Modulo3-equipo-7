import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/_index.scss';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
