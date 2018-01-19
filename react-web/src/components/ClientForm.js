import React from 'react';

export default function ClientForm({onSubmit}) {
  function handleFormSubmission(event) {
    event.preventDefault();
    // event.preventPropagation();
    const {elements} = event.target;
    const name = elements["name"].value;
    const address = elements["address"].value;
    const contact_number = elements["contact_number"].value;
    const contact_email = elements["contact_email"].value;
    const contact_person = elements["contact_person"].value;
    onSubmit({ name, address, contact_number, contact_email, contact_person })
  }

  return (
    <form onSubmit={handleFormSubmission}>

      &nbsp;&nbsp;&nbsp;&nbsp;

      <div className="container">
        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="client_name" name="name" type="text" className="validate"/>
              <label for="client_name">Client Name</label>
            </div>
          <div className="col m2"></div>
        </div>

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="client_address" name="address" type="text" className="validate"/>
              <label for="client_address">Address</label>
            </div>
          <div className="col m2"></div>
        </div>

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="client_number" name="contact_number" type="text" className="validate"/>
              <label for="client_numbder">Contact number</label>
            </div>
          <div className="col m2"></div>
        </div>

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="client_email" name="contact_email" type="text" className="validate"/>
              <label for="client_email">Contact Email</label>
            </div>
          <div className="col m2"></div>
        </div>

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="client_person" name="contact_person" type="text" className="validate"/>
              <label for="client_person">Contact Person</label>
            </div>
          <div className="col m2"></div>
        </div>

        <button className="btn waves-effect waves-light orange darken-2" type="submit">
          Add Client<i className="material-icons right">send</i>
        </button>

      </div>

    </form>
  )
}
