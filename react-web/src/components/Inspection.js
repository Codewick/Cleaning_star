import React from 'react';

export default function Inspection(props) {
  const { client, date, frequency, auditor, comments, worker } = props;
  return (
    <div className="inspection">
      <span>
        Client: {client}
      </span>
      <span>When: {date}</span>
      <span>Frequency: Every {frequency} weeks</span>
      <span>Auditor: {auditor}</span>
    </div>
  )
}
