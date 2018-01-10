import React from 'react';

export default function InspectionForm({ clients, selectedClientObjectID, onChange, onSubmit }) {
  function handleFormSubmission(event) {
    event.preventDefault();
    const { elements } = event.target;
    const auditor = elements["auditor"].value;
    const frequency = elements["frequency"].value;
    const client = elements["client"].value;
    onSubmit({ auditor, frequency, client });
  }

  function handleSelectClientValueChange(event) {
    console.log('handleValueChange occurred with event.target.value: ', event.target.value);

    onChange(event.target.value);
  }

  console.log(`in inspectionform, received list of clients from container component: `, clients);

  function renderClientOptions() {
    return clients.map((client, index) => {
      // Note: ObjectID associated with Mongo object is returned from server as _id
      if (selectedClientObjectID) {
        return (
          <option value={client._id} selected={ selectedClientObjectID == client._id ? "selected" : ""}>{client.name}</option>
        )
      } else {
        return (
          <option value={client._id} selected={ index == 0 ? "selected" : ""}>{client.name}</option>
        )
      }
    });
  };

  return (
    <form onSubmit={handleFormSubmission} >
      <label>
        Client
        &nbsp;
        <select id="selection-box-client-options"
                name="client"
                onChange={handleSelectClientValueChange}
                value={selectedClientObjectID ? selectedClientObjectID : ""} // Hack
        >
          { clients ? renderClientOptions() : null }
        </select>
      </label>
      <label>
        Auditor
        &nbsp;
        <input type="text" name="auditor"/>
      </label>
      &nbsp;
      <label>
        Frequency
        &nbsp;
        <input type="number" name="frequency"/>
      </label>
      &nbsp;
      <button type="submit">Create Inspection</button>
    </form>
  )
}