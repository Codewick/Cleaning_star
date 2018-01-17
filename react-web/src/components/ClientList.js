import React from 'react';
import Client from './Client';

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
