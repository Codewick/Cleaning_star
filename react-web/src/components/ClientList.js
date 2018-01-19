import React from 'react';
import Client from './Client';

export default function ClientList({ clients }) {
  return (
    <div>
      <h1>Client List</h1>
      {
        clients.map(client => (
          <div className="row">
            <div className="col s1 m3"></div>
            <div className="col s10 m6">

                <span key={client._id}>

                  <div className="card light-blue accent-4">
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
