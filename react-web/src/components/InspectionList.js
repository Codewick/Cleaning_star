import React from 'react';
import Inspection from './Inspection';




export default function InspectionList({ inspections, clients, employees }) {

  const modifyInspections = () => {
    let match;
    let match_final;
    let matchingInspections = [];
    inspections.forEach(inspection => {
      clients.forEach(function(client, index) {
        if (client._id === inspection.client) {
          console.log("match")
          // Append a clientName property to the inspection object
          match = Object.assign({}, inspection, { clientName: client.name });

          console.log(match)
          // matchingInspections.push(match);
        }
      });

      employees.forEach(function(employee, index) {
        if (employee._id === inspection.employee) {
          console.log("match")
          // Append a employeeName property to the match object
          match_final = Object.assign({}, match, { employeeName: employee.name });

          console.log(match_final)
          matchingInspections.push(match_final);
        }
      });


    });
    return matchingInspections;
  }

  const renderInspections = () => {
    inspections = modifyInspections();
    // console.log(inspections)
    return inspections.map(inspection => {
      return inspection ? (<Inspection key={inspection._id} inspection={inspection} />) : null
    })
  }


  return (

    <div>

        <h1>Inspection List</h1>
       { renderInspections() }

    </div>

  )
}
