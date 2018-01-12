import React from 'react';

export default function Employee(props) {
  const { name, contact_number } = props;
  return (
    <div className="employee">
      <span>
        Name: {name}
      </span>
      <span>Contact: {contact_number}</span>
    </div>
  )
}
