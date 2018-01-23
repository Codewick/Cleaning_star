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
    // sort the employees in alphabetical order
    let sortedEmployees = employees.sort((a, b) => a.lastName.localeCompare(b.lastName))
    return sortedEmployees.map((employee, index) => {
      // Note: ObjectID associated with Mongo object is returned from server as _id
      if (selectedEmployeeObjectID) {
        return (
          <option value={employee._id} selected={ selectedEmployeeObjectID == employee._id ? "selected" : ""}>{employee.lastName}, {employee.firstName}</option>
        )
      } else {
        return (
          <option value={employee._id} selected={ index == 0 ? "selected" : ""}>{employee.lastName}, {employee.firstName}</option>
        )
      }
    });
  };

  function renderEmployeeOptions() {
    return employees.map((employee, index) => {
      // Note: ObjectID associated with Mongo object is returned from server as _id
      if (selectedEmployeeObjectID) {
        return (
          <option value={employee._id} selected={ selectedEmployeeObjectID == employee._id ? "selected" : ""}>{employee.name}</option>
        )
      } else {
        return (
          <option value={employee._id} selected={ index == 0 ? "selected" : ""}>{employee.name}</option>
        )
      }
    });
  };

  return (
    <form onSubmit={handleFormSubmission} >

      <div className="container">

        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">

              <p><label>Client Select</label></p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <select className="browser-default"
                      id="selection-box-client-options"
                      name="client"
                      onChange={handleSelectClientValueChange}
                      value={selectedClientObjectID ? selectedClientObjectID : ""} // Hack
              >
                { clients ? renderClientOptions() : null }
              </select>

            </div>
          <div className="col m2"></div>
        </div> {/* end row div */}



        <div className="row">
          <div className="col m2"></div>
            <div className="input-field col s12 m8">

              <p><label>Employee Select</label></p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <select className="browser-default"
                      id="selection-box-employee-options"
                      name="employee"
                      onChange={handleSelectEmployeeValueChange}
                      value={selectedEmployeeObjectID ? selectedEmployeeObjectID : ""} // Hack
              >
                { employees ? renderEmployeeOptions() : null }
              </select>
            </div>

            <div className="col m2"></div>
          </div> {/* end row div */}

          <div className="row">
            <div className="col m2"></div>
              <div className="input-field col s12 m8">
                <input id="auditor" name="auditor" type="text" className="validate"/>
                <label for="auditor">Auditor</label>
              </div>
            <div className="col m2"></div>
          </div> {/* end row div */}



          <div className="row">
            <div className="col m2"></div>
            <div className="input-field col s12 m8">
              <input id="date" name="date" type="date" className="datepicker validate" />
              <label for="date">Calendar Date</label>
            </div>
            <div className="col m2"></div>
          </div>

          <div className="row">
            <div className="col m2"></div>
              <div className="input-field col s12 m8">
                <input id="frequency" name="frequency" type="number" className="validate"/>
                <label for="frequency">Frequency</label>
              </div>
            <div className="col m2"></div>
          </div> {/* end row div */}


          <button className="btn waves-effect waves-light orange darken-2" type="submit">
            Create Inspection<i className="material-icons right">send</i>
          </button>

      </div>
    </form>
  )
}
