import React from 'react';
import Employee from './Employee';

export default function EmployeeList({ employees }) {
  return (
    <div>
      <h1>Employee List</h1>
      {
        employees.map(employee => (
          <div className="row">
            <div className="col s1 m3"></div>
            <div className="col s10 m6">
              <div className="employee-box grey lighten-1">
                <span key={employee._id}>
                  <div className="row employee-list-item">
                    <div className="col s2 m4"></div>
                    <div className="col s4 m2">{employee.firstName}</div>
                    <div className="col s4 m2">{employee.lastName}</div>
                    <div className="col s2 m4"></div>
                  </div>
                </span>
                <div className="row" key={employee._id}>{employee.contact_number}</div>
                {/*<Employee key={employee._id} {...employee}/>*/}
              </div>
            </div>
            <div className="col s1 m3"></div>
          </div>
        ))
      }
    </div>
  )
}
