import React from 'react';

export default function InspectionForm({ clients, onSubmit }) {
  function handleFormSubmission(event) {
    event.preventDefault();
    const { elements } = event.target;
    const auditor = elements["auditor"].value;
    const frequency = elements["frequency"].value;
    const client = elements["client"].value
    onSubmit({ auditor, frequency, client });
  }

  console.log(`in inspectionform, received list of clients from container component: `, clients);

  return (
    <form onSubmit={handleFormSubmission} >
    <label>
      Client
      &nbsp;
      <input type="text" name="client"/>
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
