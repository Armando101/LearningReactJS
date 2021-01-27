import React from 'react';

class BadgeForm extends React.Component {
    state = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
          </div>
          <div className="form-group">
            <label>Lastname</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
          </div>
          <div className="form-group">
            <label>email</label>
            <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
          </div>
          <button className="btn btn-primary">Save</button>
          {this.props.error && 
            <p className="text-danger">
              {this.props.error.message}
            </p>}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
