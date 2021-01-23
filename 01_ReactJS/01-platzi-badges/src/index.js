// const element = document.createElement('h1');
// element.innerHTML = 'Hello, Platzi Badges';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, Platzi Badges form React</h1>

const container = document.getElementById('app');

// ReactDOM Recibe dos argumentos
// Qué es lo que va a meter y donde lo va a meter, esto es, 
// Un nodo y un contendedor
ReactDOM.render(element, container)