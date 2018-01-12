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

      <label>
        First Name
        &nbsp;
        <input type="text" name="firstName"/>
      </label>

      &nbsp;

      <label>
        Last Name
        &nbsp;
        <input type="text" name="lastName"/>
      </label>

      &nbsp;

      <label>
        Contact Phone
        &nbsp;
        <input type="number" name="contact_number" />
      </label>

      &nbsp;

      <button type="submit">Add Employee</button>

    </form>
  )
}
