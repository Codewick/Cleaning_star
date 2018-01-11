import React from 'react';

function Client(props) {
  const { name, address, contact_number, e_mail, contact_person } = props;
  return (
    <div className="client">
      <span>Name: {name}</span>
      <span>Address: {address}</span>
      <span>Contact Phone: {contact_number}</span>
      <span>Email: {e_mail}</span>
      <span>Contact Person: {contact_person}</span>
    </div>
  )
}

export default function ClientList({ clients }) {
  return (
    <div>
      <h1>Client List</h1>
      {
        clients.map(client => (
          <Client key={client._id} {...client}/>
        ))
      }
    </div>
  )
}
