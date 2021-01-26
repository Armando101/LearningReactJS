import React, { Component } from 'react'
import './styles/BadgeList.css';

export class BadgesList extends Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          // El key es importante para React ya que lo tomara como identificador
          // Para saber en si el elemento cambia de estado
          return (
            <div className="badge" key={badge.id}>
              <img className="badge__avatar" src={badge.avatarUrl} alt={badge.twitter}/>
              <div className="badgeList-info">
                <p className="badge__info">{badge.firstName} {badge.lastName}</p>
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
