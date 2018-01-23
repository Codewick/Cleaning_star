import React from 'react';
import Client from './Client';

export default function ClientList({ clients }) {
  let sortedClients = clients.sort((a, b) => a.name.localeCompare(b.name))
  return (
    <div>

      <h1 className="heading">Client List</h1>

      {
        sortedClients.map(client => (
          <div className="row">
            <div className="col s1 m3"></div>
            <div className="col s10 m6">

                <span key={client._id}>

                  <div className="card grey darken-4">
                    <span className="white-text">
                      <div className="card-content">
                        <div className="card-title">{client.name}</div>
                        <p>{client.address}</p>
                        <p>{client.contact_person}</p>
                        <p>{client.contact_number}</p>
                        <p>{client.e_mail}</p>
                      </div>
                    </span>
                  </div>

                </span>

            </div>
            <div className="col s1 m3"></div>
          </div>

        ))
      }
    </div>
  )
}
