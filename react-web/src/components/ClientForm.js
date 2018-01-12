import React from 'react';

export default function ClientForm({onSubmit}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const name = elements["name"].value;
    const address = elements["address"].value;
    const contact_number = elements["contact_number"].value;
    const e_mail = elements["e_mail"].value;
    const contact_person = elements["contact_person"].value;
    onSubmit({ name, address, contact_number, e_mail, contact_person })
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
        Address
        &nbsp;
        <input type="text" name="address" />
      </label>

      &nbsp;

      <label>
        Contact Phone
        &nbsp;
        <input type="number" name="contact_number" />
      </label>

      &nbsp;

      <label>
        Email
        &nbsp;
        <input type="text" name="e_mail" />
      </label>

      &nbsp;

      <label>
        Contact Person
        &nbsp;
        <input type="text" name="contact_person" />
      </label>

      &nbsp;

      <button type="submit">Add Client</button>

    </form>
  )
}
