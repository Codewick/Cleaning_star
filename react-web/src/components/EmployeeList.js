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




//
//
// export default function EmployeeList({ employees }) {
//   let sortedEmployees = employees.sort((a, b) => a.lastName.localeCompare(b.lastName))
//   return (
//     <div>
//       <h1 className="heading">Employee List</h1>
//
//       {
//         sortedEmployees.map(employee => (
//           <div>
//             <h1>Employee List</h1>
//             {
//               employees.map(employee => (
//                 <Employee key={employee._id} {...employee}/>
//               ))
//             }
//           </div>
//         ))
//       }
//   )
// }
