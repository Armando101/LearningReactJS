import  React from "react";
import './styles/BadgeNew.css';
import logo from '../images/badge-header.svg';
import Badge from "../components/Badge";
import avatar from '../images/avatar.jpg';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';
class BadgeNew extends React.Component {
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
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
        error: null
      });
      // Las propiedades que recibe este componente son del router
      // Recibe history, location y match
      // Al hacer un push a history nos redirecciona a la ruta indicada
      // console.log(this.props);
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({
        loading: false,
        error
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading/>
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
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
              <BadgeForm error={this.state.error} onSubmit={this.handleSubmit} onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;