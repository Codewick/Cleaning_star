import React from 'react';
import Client from './Client';

export default function ClientList({ clients }) {
  let sortedClients = clients.sort((a, b) => a.name.localeCompare(b.name))


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
