import React from 'react'
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import './styles/BadgeDetail.css';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

// Creando propio hook
function useIncreaseCount(max) {
  const [ count, setCount ] = React.useState(0);

  if (count >= max) {
    setCount(0);
  }

  return [ count, setCount ];
}

function BadgeDetails({badge, onCloseModal, onOpenModal, modalIsOpen, onDeleteBadge}) {
  const [ count, setCount ] = useIncreaseCount(10);

  // const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de conferencia"/>
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge firstName={badge.firstName} lastName={badge.lastName}
                email={badge.email} twitter={badge.twitter} jobTitle={badge.jobTitle}
              />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link></div>
              <div>
                <button onClick={onOpenModal} className="btn btn-danger">Delete</button>

                <button onClick={() => {
                  setCount(count + 1)
                }} className="btn btn-primary mb-4">Increse Count {count+1}</button>

                <DeleteBadgeModal
                  isOpen={modalIsOpen}
                  onClose={onCloseModal}
                  onDeleteBadge={onDeleteBadge}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, aperiam voluptatem rem, accusantium ad molestiae tempore nisi repudiandae expedita saepe quis, aliquid praesentium inventore veritatis placeat optio. Ullam, neque minima.</DeleteBadgeModal>
              </div>
            </div>
          </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default BadgeDetails
