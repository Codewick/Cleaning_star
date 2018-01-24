import React from 'react';
import { Link } from 'react-router-dom';
export default function Inspection(props) {


  const { client, clientName, date, frequency, auditor, comments, employee, employeeName, inspection, onDelete } = props.inspection;
  // const { clientName } = this.props;

  console.log(clientName);
  console.log('*****')
  const d1 = new Date(Date.parse(date))
  let month = d1.toLocaleString('en-au', { month: 'long' })
  let year = d1.toLocaleString('en-au', { year: 'numeric' })
  let day = d1.toLocaleString('en-au', { day: 'numeric' })




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
              <p>Inspection date: {day + " " + month + " " + year}</p>
              <p>Frequency: Every {frequency} weeks</p>
              <p>Auditor: {auditor}</p>
              <p>Comments: {comments}</p>




              <Link to={`/inspections/${props.inspection._id}`} className="btn waves-effect waves-light orange darken-2">Show<i className="material-icons right">open_in_new</i></Link>
              <span> </span>
              <button className="btn waves-effect waves-light orange darken-2" onClick={deleteInspection}>Delete<i className="material-icons right">delete</i></button>
            </div>

          </span>
        </div>
      <div className="col s1 m3"></div>
    </div>
  </div>
  )
}
