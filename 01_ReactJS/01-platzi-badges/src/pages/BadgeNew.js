import  React from "react";
import './styles/BadgeNew.css';
import Navbar from "../components/Navbar";
import logo from '../images/badge-header.svg';
import Badge from "../components/Badge";
import avatar from '../images/avatar.jpg';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img src={logo} alt="Logo" className="img-fluid"/>
        </div>

        <div className="contai">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Armando"
                lastName="Rivera"
                contact="Armando101"
                jobTitle="Armando101"
                avatar={avatar}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;