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

      <Link to={`/clients/delete/${props._id}`} onClick={deleteClient}>Delete</Link>&nbsp;

    </div>
  )
}
