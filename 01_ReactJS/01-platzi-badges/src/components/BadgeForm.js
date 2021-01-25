import React from 'react';

class BadgeForm extends React.Component {
  handleChange = (event) => {
    console.log({
      value: event.target.value,
      name: event.target.name
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
            <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
          </div>
          <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
