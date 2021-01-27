import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
import './styles/BadgeList.css';

export class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>Ups parece que aún no hay ningún badge creado</h3>
          <Link className="btn btn-primary" to="/badges/new">Crea un nuevo Badge</Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          // El key es importante para React ya que lo tomara como identificador
          // Para saber en si el elemento cambia de estado
          return (
            <div className="badge__card" key={badge.id}>
              <Gravatar className="badge__avatar" email={badge.email}/>
              <div className="badgeList-info">
                <p className="badgeList-info">{badge.firstName} {badge.lastName}</p>
                <p className="badge__twitter">@{badge.twitter}</p>
                <p className="badge_info">{badge.jobTitle}</p>
              </div>
            </div>
          )
        })}
      </ul>
    );
  }
}

export default BadgesList;
