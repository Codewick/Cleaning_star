import React from 'react';
import Inspection from './Inspection';
import Map from './Map';
import geoFindMe from './Location'
import geocode from './Geocode'

export default function InspectionList({ inspections, clients, employees }) {

  console.log(inspections)
  console.log(clients)

  const modifyInspections = () => {
    let match;
    let match_final;
    let matchingInspections = [];
    inspections.forEach(inspection => {
      clients.forEach(function(client, index) {
        if (client._id == inspection.client) {
          console.log("match")
          // Append a clientName property to the inspection object
          match = Object.assign({}, inspection, { clientName: client.name });

          console.log(match)
          // matchingInspections.push(match);
        }
      });

      employees.forEach(function(employee, index) {
        if (employee._id == inspection.employee) {
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



  // inspections.map(inspection => (
  //   <div className="card blue-grey">
  //     <Inspection key={inspection._id} {...inspection}/>
  //   </div>
  // ))

  return (
    <div>



      <p><button onClick={geoFindMe}>Show my location</button></p>
      <div id="formatted-address"></div>
      <div id="out"></div>


      <Map
        zoom={18}
        center={{ lat: -33.8820298, lng: 151.1951639 }}
        containerElement= {<div style={{width: 400, height: 400}}/>}
        mapElement={<div style={{width: 400, height: 400}}/>}
      />

      <h1>Inspection List</h1>
      { renderInspections() }
    </div>
  )
}
