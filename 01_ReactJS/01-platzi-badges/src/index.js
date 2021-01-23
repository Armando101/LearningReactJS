// const element = document.createElement('h1');
// element.innerHTML = 'Hello, Platzi Badges';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const element = <h1>Hello, Platzi Badges form React</h1>
// Otra manera de hacer lo anterior sin usar las etiquetas html usamos React.createElement
// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Go to platzi');
// const element = React.createElement('h1', {}, 'Hello Im Armando');

// const name = 'Armando';
// Dentro de las llaves incluimos siempre expresiones
// Si colocamos valores falsy éstos no se mostrarán
// const jsx = <h1>Hello Im {name}</h1>

const jsx = <div>
  <h1>Hola soy Armando Rivera</h1>
  <p>Soy Fontend Developer</p>
</div>

// Lo anterior con React.createElement
// const element = React.createElement(
//   'div',
//   {},
//   React.createElement('h1', {}, 'Hola soy Armando Rivera'),
//   React.createElement('p', {}, 'Soy Fontend Developer')
// )

// Como podemos ver es más tedioso tanto de ver como de escribir código con React.createElement
// Es por eso que siempre vamos a preferiri usar JSX

const container = document.getElementById('app');

// ReactDOM Recibe dos argumentos
// Qué es lo que va a meter y donde lo va a meter, esto es, 
// Un nodo y un contendedor
ReactDOM.render(jsx, container)