import React from 'react';
import { Link } from 'react-router-dom';

export default function Employee(props) {
  const { firstName, lastName, contact_number, _id, employee } = props;

  function deleteEmployee() {
    let url;
    url = `/employees/${props._id}`
    console.log(`url: ${url}`);
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
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

              <div className="card-title">{firstName + " " + lastName}</div>
              <p>Contact: {contact_number}</p>

              <button className="btn waves-effect waves-light orange darken-2" onClick={deleteEmployee}>
                Delete<i className="material-icons right">delete</i>
              </button>






            </span>
          </div>
        </div>
      <div className="col s1 m3"></div>
    </div>
  )
}


  // <Link to={`/employees/delete/${props._id}`} onClick={deleteEmployee}>Delete</Link>&nbsp;
