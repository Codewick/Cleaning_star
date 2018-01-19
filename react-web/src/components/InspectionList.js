import React from 'react';
import Inspection from './Inspection';

export default function InspectionList({ inspections }) {
  return (
    <div>
      <h1>Inspection List</h1>
      {
        inspections.map(inspection => (
          <div className="row">

          <div className="col s1 m3"></div>
          <div className="col s10 m6">

            <span key={inspection._id}>

            <div className="card light-blue accent-4">
              <span className="white-text">
                <div className="card-content">
                  <div className="card-title">{inspection.client}</div>
                  <p>{inspection.employee}</p>
                  <p>{inspection.date}</p>
                  <p>{inspection.frequency}</p>
                  <p>{inspection.auditor}</p>
                </div>
              </span>
            </div>

            </span>

          </div>

          <div className="col s1 m3"></div>

          </div>
        ))
      }
    </div>
  )
}
