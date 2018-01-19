import React from 'react';

export default function Client(props) {
  const { name, address, contact_number, e_mail, contact_person } = props;
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
        Email: {e_mail}
      </span>
      <span>
        Person: {contact_person}
      </span>
    </div>
  )
}
