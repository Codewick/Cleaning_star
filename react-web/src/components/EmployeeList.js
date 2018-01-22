import React from 'react';
import Employee from './Employee';

export default function EmployeeList({ employees }) {
  return (
    <div>
      {
        employees.map(employee => (
          <Employee key={employee._id} {...employee}/>
        ))
      }
    </div>
  )
}
