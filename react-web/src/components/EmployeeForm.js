import React from 'react';

export default function EmployeeForm({onSubmit}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const firstName = elements["firstName"].value;
    const lastName = elements["lastName"].value;
    const contact_number = elements["contact_number"].value;
    onSubmit({ firstName, lastName, contact_number })
  }

  return (
    <form onSubmit={handleFormSubmission}>

      &nbsp;&nbsp;&nbsp;&nbsp;

      <div className="container">
        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="first_name" name="firstName" type="text" className="validate"/>
              <label for="first_name">First Name</label>
            </div>
          <div className="col m2"></div>
        </div>

        &nbsp;&nbsp;&nbsp;&nbsp;

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="last_name" name="lastName" type="text" className="validate"/>
              <label for="last_name">Last Name</label>
            </div>
          <div className="col m2"></div>
        </div>

        &nbsp;&nbsp;&nbsp;&nbsp;

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="contact_number" name="contact_number" type="number" className="validate"/>
              <label for="contact_number">Contact Phone</label>
            </div>
          <div className="col m2"></div>
        </div>

        &nbsp;&nbsp;&nbsp;&nbsp;

        <button className="btn waves-effect waves-light orange darken-2" type="submit">
          Add Employee<i className="material-icons right">send</i>
        </button>

      </div>

    </form>
  )
}
