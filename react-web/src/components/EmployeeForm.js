import React from 'react';

export default function EmployeeForm({onSubmit}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const name = elements["name"].value;
    const contact_number = elements["contact_number"].value;
    onSubmit({ name, contact_number })
  }

  return (
    <form onSubmit={handleFormSubmission}>

      <label>
        Name
        &nbsp;
        <input type="text" name="name"/>
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
