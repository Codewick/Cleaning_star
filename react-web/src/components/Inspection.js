import React from 'react';
import { Link } from 'react-router-dom';
export default function Inspection(props) {


  const { client, clientName, date, frequency, auditor, comments, employee, employeeName, inspection, onDelete } = props.inspection;
  // const { clientName } = this.props;

  console.log(clientName);

  const formatedDate = date
  console.log("this is in formatedDate variable: ", formatedDate)
  //formatedDate.todateString()
  //formatedDate.toDateString();

  function deleteInspection() {
    let url;
    url = `/inspections/${props.inspection._id}`
    console.log(`url: ${url}`);
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inspection)
    })
    .then(res => {
      console.log(`response from backend: ${JSON.stringify(res)}`);
      res.json()
      onDelete()
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

            <div className="card-content">

              <span className="card-title">{clientName}</span>
              <p>Employee: {employeeName}</p>
              <p>Inspection date: {date}</p>
              <p>Frequency: Every {frequency} weeks</p>
              <p>Auditor: {auditor}</p>
              <p>Comments: {comments}</p>
              <Link to={`/inspections/${props.inspection._id}`}>Show</Link>
              <Link to={`/inspections/delete/${props.inspection._id}`} onClick={deleteInspection}>Delete</Link>
            </div>

          </span>
        </div>
      <div className="col s1 m3"></div>
    </div>
  </div>
  )
}
