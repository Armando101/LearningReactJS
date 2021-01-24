// const element = document.createElement('h1');
// element.innerHTML = 'Hello, Platzi Badges';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge/>, container);