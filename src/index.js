import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App saludo="oli">
    <h1>
      Esto es título
    </h1>
  </App>,
  document.getElementById('root')
);
