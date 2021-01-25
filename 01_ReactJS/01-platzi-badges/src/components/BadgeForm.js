import React from 'react';

class BadgeForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  };
  handleChange = (event) => {
    // console.log({
    //   value: event.target.value,
    //   name: event.target.name
    // });

    this.setState({
      [event.target.name]: event.target.value,
    });

  }

  handleClick = _ => {
    console.log('Send');
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form action="">
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName}/>
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName}/>
          </div>
          <div className="form-group">
            <label>email</label>
            <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email}/>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="twitter" value={this.state.twitter}/>
          </div>
          <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
