import  React from "react";
import './styles/BadgeNew.css';
import logo from '../images/badge-header.svg';
import Badge from "../components/Badge";
import avatar from '../images/avatar.jpg';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = { form: {} };
  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={logo} alt="Logo" className="img-fluid"/>
        </div>

        <div className="contai">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                avatar={avatar}/>
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;