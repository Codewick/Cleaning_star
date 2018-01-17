import React from 'react';

export default function Employee(props) {
  const { firstName, lastName, contact_number } = props;
  return (
    <div className="employee">
      <span>
        Name: {firstName} {lastName}
      </span>
      <span>Contact: {contact_number}</span>
    </div>
  )
}
