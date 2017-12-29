import React from 'react';

export default function InspectionForm({ onSubmit }) {
  function handleFormSubmission(event) {
    event.preventDefault();
    const { elements } = event.target;
    const auditor = elements["auditor"].value;
    const frequency = elements["frequency"].value;
    onSubmit({ auditor, frequency });
  }

  return (
    <form onSubmit={handleFormSubmission} >
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
