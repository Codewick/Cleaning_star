import React from 'react';
import Client from './Client';

export default function ClientList({ clients }) {
  return (
    <div>
      {
        clients.map(client => (
          <Client key={client._id} {...client}/>
        ))
      }
    </div>
  )
}
