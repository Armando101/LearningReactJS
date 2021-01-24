import React from 'react'; // Importante para usar RXJS
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return <div>
        <div>
          <img src={ confLogo } alt="Logo de la conferencia"/>
        </div>
        <div>
          <img src="" alt="Avatar"/>
          <h1>Armando <br/> Rivera</h1>
        </div>
        <div>
          <p>Frontend Developer</p>
        </div>
      </div>
  }
}

export default Badge;