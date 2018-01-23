import React from 'react';
import { Link } from 'react-router-dom';
export default function Inspection(props) {

  const { client, clientName, date, frequency, auditor, comments, employee, employeeName, inspection, onDelete } = props.inspection;
  // const { clientName } = this.props;
  console.log(clientName);

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
    <div className="inspection">
    
      <span>
        Client: {clientName}
      </span>&nbsp;
      <span>
        Employee: {employeeName}
      </span>&nbsp;
      <span>date: {date}</span>&nbsp;
      <span>Frequency: Every {frequency} weeks</span>&nbsp;
      <span>Auditor: {auditor}</span>&nbsp;
      <span>Comments: {comments}</span>&nbsp;
      <Link to={`/inspections/${props.inspection._id}`}>Show</Link>&nbsp;
      <Link to={`/inspections/delete/${props.inspection._id}`} onClick={deleteInspection}>Delete</Link>&nbsp;
    </div>
  )
}
