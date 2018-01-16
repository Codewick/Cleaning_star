import React from 'react';

export default function Inspection(props) {
<<<<<<< Updated upstream
  const { client, clientName, date, frequency, auditor, comments, employee, employeeName } = props.inspection;
  console.log(clientName);
  return (
    <div className="inspection">
      <span>
        Client: {clientName}
      </span>&nbsp;
      <span>
        Employee: {employeeName}
      </span>&nbsp;
      <span>date: {date}</span>&nbsp;
      <span>Frequency: Every {frequency} weeks</span>&nbsp;
=======
  const { client, date, frequency, auditor, comments, employee } = props;
  return (
    <div className="inspection">
      <span>
        Client: {client}
      </span>
      <span>
        worker: {employee}
      </span>
      <span>When: {date}</span>
      <span>Frequency: Every {frequency} weeks</span>
>>>>>>> Stashed changes
      <span>Auditor: {auditor}</span>
    </div>
  )
}
