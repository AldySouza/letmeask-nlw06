import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//HTML dentro do JS => JSX => dentro do Typescript => TSX