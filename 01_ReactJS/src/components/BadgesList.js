import React from 'react'
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';
import './styles/BadgeList.css';

function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState('');
  const [ filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName.toLowerCase()} ${badge.lastName.toLowerCase()}`.includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return [query, setQuery, filteredBadges];
}

function BadgesList(props) {
  const badges = props.badges;
  const [query, setQuery, filteredBadges] = useSearchBadges(badges); 
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className="form-control"
          value={query}
          onChange={(e) => {setQuery(e.target.value)}}/>
        </div>
        <h3>Ups parece que aún no hay ningún badge creado</h3>
        <Link className="btn btn-primary" to="/badges/new">Crea un nuevo Badge</Link>
      </div>
    )
  }
  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className="form-control"
        value={query}
        onChange={(e) => {setQuery(e.target.value)}}/>
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          // El key es importante para React ya que lo tomara como identificador
          // Para saber en si el elemento cambia de estado
          return (
            <div className="badge__card" key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <Gravatar className="badge__avatar" email={badge.email}/>
              </Link>
                <div className="badgeList-info">
                  <p className="badgeList-info">{badge.firstName} {badge.lastName}</p>
                  <p className="badge__twitter">@{badge.twitter}</p>
                  <p className="badge_info">{badge.jobTitle}</p>
                </div>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
