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

              <span> Name: </span>
              <div className="card-title">{name}</div>

              <span> Address: {address} </span>
              <span> Contact: {contact_number}</span>
              <span> Email: {e_mail} </span>
              <span> Person: {contact_person}</span>

              <Link to={`/clients/delete/${props._id}`} onClick={deleteClient}>Delete</Link>&nbsp;


          </span>
          </div>
        </div>
      <div className="col s1 m3"></div>
    </div>
  )
}



//
// <div className="row">
//   <div className="col s1 m3"></div>
//   <div className="col s10 m6">
//
//       <span key={client._id}>
//
//         <div className="card grey darken-4">
//           <span className="white-text">
//             <div className="card-content">
//               <div className="card-title">{client.name}</div>
//               <p>{client.address}</p>
//               <p>{client.contact_person}</p>
//               <p>{client.contact_number}</p>
//               <p>{client.e_mail}</p>
//             </div>
//           </span>
//         </div>
//
//       </span>
//
//   </div>
//   <div className="col s1 m3"></div>
// </div>
//
// ))
// }
// </div>
