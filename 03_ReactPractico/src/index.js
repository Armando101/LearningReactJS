import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './routes/App';

// Se tiene que encapsular nuestra aplicación dentro de un provider
// Porque nada fuera del provider podrá acceder al store
// El <Provider /> hace que la store de Redux esté disponible para cualquier componente anidado que se haya incluido en la función connect().

ReactDom.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);
