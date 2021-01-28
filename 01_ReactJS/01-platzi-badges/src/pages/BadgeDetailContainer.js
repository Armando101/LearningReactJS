import React, { Component } from 'react'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import './styles/BadgeDetail.css';
import api from '../api';
import BadgeDetails from './BadgeDetails';

export class BadgeDetailContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  }

  render() {

    if (this.state.loading) {
      return <PageLoading/>
    }

    if (this.state.error) {
      return <PageError/>
    }

    return (
      <BadgeDetails badge={this.state.data}/>
    )
  }
}

export default BadgeDetailContainer;
