import React from 'react';

export default function Client(props) {
  const { name, address, contact_number, contact_email, contact_person } = props;
  return (
    <div className="client">
      <span>
        Name: {name}
      </span>
        Address: {address}
      <span>
        Contact: {contact_number}
      </span>
      <span>
        Email: {contact_email}
      </span>
      <span>
        Person: {contact_person}
      </span>
    </div>
  )
}
