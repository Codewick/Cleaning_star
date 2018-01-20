import React from 'react';


export default function InspectionForm({ clients, employees, selectedClientObjectID, selectedEmployeeObjectID, onClientValueChange, onEmployeeValueChange, onSubmit }) {

  function handleFormSubmission(event) {
    event.preventDefault();
    const { elements } = event.target;
    const auditor = elements["auditor"].value;
    const frequency = elements["frequency"].value;
    const client = elements["client"].value;
    const employee = elements["employee"].value;
    const date = elements["date"].value;
    onSubmit({ auditor, frequency, client, employee, date });
  }

  function handleSelectClientValueChange(event) {
    console.log('handleValueChange occurred with event.target.value: ', event.target.value);

    onClientValueChange(event.target.value);
  }

  function handleSelectEmployeeValueChange(event) {
    console.log('handleValueChange occurred with event.target.value: ', event.target.value);

    onEmployeeValueChange(event.target.value);
  }


  console.log(`in inspectionform, received list of clients from container component: `, clients);

  function renderClientOptions() {
    return clients.map((client, index) => {
      // Note: ObjectID associated with Mongo object is returned from server as _id
      if (selectedClientObjectID) {
        return (
          <option value={client._id} selected={ selectedClientObjectID === client._id ? "selected" : ""}>{client.name}</option>
        )
      } else {
        return (
          <option value={client._id} selected={ index === 0 ? "selected" : ""}>{client.name}</option>
        )
      }
    });
  };

  function renderEmployeeOptions() {
    return employees.map((employee, index) => {
      // Note: ObjectID associated with Mongo object is returned from server as _id
      if (selectedEmployeeObjectID) {
        return (
          <option value={employee._id} selected={ selectedEmployeeObjectID === employee._id ? "selected" : ""}>{employee.name}</option>
        )
      } else {
        return (
          <option value={employee._id} selected={ index === 0 ? "selected" : ""}>{employee.name}</option>
        )
      }
    });
  };



  return (
    <form onSubmit={handleFormSubmission} >
      <label>
        Client
        &nbsp;
        <select class="browser-default"
                id="selection-box-client-options"
                name="client"
                onChange={handleSelectClientValueChange}
                value={selectedClientObjectID ? selectedClientObjectID : ""} // Hack
        >
          { clients ? renderClientOptions() : null }
        </select>
      </label>

      <label>
        worker
        &nbsp;
        <select class="browser-default"
                id="selection-box-employee-options"
                name="employee"
                onChange={handleSelectEmployeeValueChange}
                value={selectedEmployeeObjectID ? selectedEmployeeObjectID : ""} // Hack
        >
          { employees ? renderEmployeeOptions() : null }
        </select>
      </label>

      <label>
        Auditor
        &nbsp;
        <input type="text" name="auditor"/>
      </label>
      &nbsp;

      <label>
        Auditor
        &nbsp;
        <input type="date" name="date"/>
      </label>

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
