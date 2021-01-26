import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/astronauts.svg';
import platzi_logo from '../images/platziconf-logo.svg';
import './styles/Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__banner col-6">
          <img src={platzi_logo} alt="banner"/>
          <h3 className="home__banner-info">Print Your Badges</h3>
          <p className="home__banner-info">The easiest way to manage your conference</p>
          <Link to="/badges" className="btn btn-primary">Start Now</Link>
        </div>
        <img className="home__logo col-6" src={logo} alt=""/>
      </div>
    )
  }
}

export default Home
