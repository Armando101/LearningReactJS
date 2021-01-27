import  React from "react";
import './styles/BadgeEdit.css';
import logo from '../images/badge-header.svg';
import Badge from "../components/Badge";
import avatar from '../images/avatar.jpg';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeEdit extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      twitter: '',
      jobTitle: '',
      email: ''
    }
  };
  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      loading: true,
      error: null
    });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({
        loading: false,
        error: null
      });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error
      });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async _ => {
    this.setState({ loading: true, error: null});
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data});
    } catch (error) {
      this.setState({ loading: false, error});
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading/>
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img src={logo} alt="Logo" className="img-fluid"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || ''}
                avatar={avatar}/>
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm error={this.state.error} onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit;