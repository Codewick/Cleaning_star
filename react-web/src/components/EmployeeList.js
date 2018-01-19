import React from 'react';
import Employee from './Employee';

export default function EmployeeList({ employees }) {
  let sortedEmployees = employees.sort((a, b) => a.lastName.localeCompare(b.lastName))
  return (
    <div>
      <h1>Employee List</h1>
      {
        sortedEmployees.map(employee => (
          <div className="row">
            <div className="col s1 m3"></div>
            <div className="col s10 m6">

                <span key={employee._id}>
                  <div className="row employee-list-item">
                    <div className="col s1 m3"></div>

                    <div className="card-panel light-blue accent-4 col s10 m6">
                      <span className="white-text">
                        <div className="row employee-list-item">
                          <p>{employee.lastName}, {employee.firstName}</p>
                        </div>
                        <p>{employee.contact_number}</p>
                      </span>
                    </div>

                    <div className="col s1 m3"></div>
                  </div>
                </span>

                {/*<Employee key={employee._id} {...employee}/>*/}

            </div>
            <div className="col s1 m3"></div>
          </div>
        ))
      }
    </div>
  )
}
