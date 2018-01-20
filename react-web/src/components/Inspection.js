import React from 'react';

export default function Inspection(props) {
  const { clientName, date, frequency, auditor, employeeName } = props.inspection;
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
      <span>Auditor: {auditor}</span>
    </div>
  )
}
