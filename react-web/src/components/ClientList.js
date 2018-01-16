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
              <div className="client-box grey lighten-1">
                <span key={client._id}>
                    <div className="col s3 m3"></div>
                    <div className="col s6 m6 client-name">{client.name}</div>
                    <div className="col s3 m3"></div>
                    {/*<Client key={client._id} {...client}/>*/}
                </span>
              </div>
            </div>
            <div className="col s1 m3"></div>
          </div>

        ))
      }
    </div>
  )
}
