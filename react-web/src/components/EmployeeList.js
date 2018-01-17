import React from 'react';
import Employee from './Employee';

export default function EmployeeList({ employees }) {
  return (
    <div>
      <h1>Employee List</h1>
      {
        employees.map(employee => (
          <Employee key={employee._id} {...employee}/>
        ))
      }
    </div>
  )
}
