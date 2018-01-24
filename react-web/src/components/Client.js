import React from 'react';
import { Link } from 'react-router-dom';

export default function Client(props) {
  console.log(props);
  const { client, name, _id, address, contact_number, e_mail, contact_person } = props;
  function deleteClient() {
    let url;
    url = `/clients/${props._id}`
    console.log(`url: ${url}`);
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    })
    .then(res => {
      console.log(`response from backend: ${JSON.stringify(res)}`);
      res.json()
    })
    .catch(error => {
      console.log(`response from backend error: ${error}`);
    })
  }


  return (
    <div className="row">
      <div className="col s1 m3"></div>
        <div className="col s10 m6">
          <div className="card grey darken-4">
            <span className="white-text">

              <div className="card-title">{name}</div>
                <p>{address}</p>
                <p>{contact_number}</p>
                <p>{e_mail}</p>
                <p>{contact_person}</p>
              <Link to={`/clients/delete/${props._id}`} onClick={deleteClient}>Delete</Link>&nbsp;

            </span>
          </div>
        </div>
      <div className="col s1 m3"></div>
    </div>
  )
}
