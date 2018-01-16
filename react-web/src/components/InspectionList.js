import React from 'react';
import Inspection from './Inspection';

export default function InspectionList({ inspections }) {
  return (
    <div>
      <h1>Inspection List</h1>
      {
        inspections.map(inspection => (
          <div className="card blue-grey">
            <Inspection key={inspection._id} {...inspection}/>
          </div>
        ))
      }
    </div>
  )
}
