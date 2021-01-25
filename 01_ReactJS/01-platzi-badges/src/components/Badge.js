import React from 'react'; // Importante para usar RXJS
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return <div className="badge">
        <div className="badge_header">
          <img src={ confLogo } alt="Logo de la conferencia"/>
        </div>
        <div className="badge_section-name">
          <img className="badge_avatar" src="https://avatars.githubusercontent.com/u/35951139?s=460&u=13d966481ef4970a3827c7cbe13ad1c8caca42ad&v=4" alt="Avatar"/>
          <h1>Armando <br/> Rivera</h1>
        </div>
        <div className="badge_section-info">
          <p>Frontend Developer</p>
        </div>
        <div className="badge_footer">
          @Armando101
        </div>
      </div>
  }
}

export default Badge;