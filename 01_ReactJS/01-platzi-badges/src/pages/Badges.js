import React, { Component } from 'react'
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

export class Badges extends Component {
  timeoutId;
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      error: null,
      data: []
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log({
    //   prevProps,
    //   prevState
    // });

    // console.log({
    //   props: this.props,
    //   state: this.state
    // });
  }

  componentWillUnmount() {
  }

  fetchData = async () => {
    this.setState({
      loading: true, error: null
    });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data})
    } catch (error) {
      this.setState({ loading: false, error})
    }
  }

  render() {
    if (this.state.loading === true) {
      return <PageLoading/>;
    }

    if (this.state.error) {
      return <PageError error={this.state.error}/>;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="Conf Logo"/>
            </div>
          </div>
        </div>
        <div className="Badge__contain">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>
        </div>
        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
