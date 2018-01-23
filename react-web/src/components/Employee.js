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
    <div className="employee">
      <span>
        FirstName: {firstName}
      </span>
      <span>
        LastName: {lastName}
      </span>
      <span>Contact: {contact_number}</span>
      <Link to={`/employees/delete/${props._id}`} onClick={deleteEmployee}>Delete</Link>&nbsp;
    </div>
  )
}
