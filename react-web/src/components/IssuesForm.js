import React from 'react'
import * as inspectionAPI from '../api/inspections';

export class IssuesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      inspectio: props.inspection,
    };
    // inspection = Object.assign({}, inspection, { comments: '' });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});


  }

  handleSubmit(event) {
    let insp;
    let com;
    let inspection;
    let url;
    // alert('A comment was submitted: ' + this.state.value);
    event.preventDefault();
    insp = this.state.inspectio;
    com = this.state.value;
    inspection = Object.assign({}, insp, { comments: com });
    // const {elements} = event.target;
    // // event.preventPropagation();
    // const comments = elements["comments"].value;
    // const inspection = elements["inspection"].value;
    console.log(`value of inp props: ${inspection._id}`);

    // const comments = this.state.value;
    // inspection.comments = comments;
    // inspectionAPI.save(inspection);

    // fetch('/inspections/${inspection._id}', {
    url = `/inspections/${inspection._id}`
    console.log(`url: ${url}`);
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inspection)
    })
    .then(res => {
      console.log(`response from backend: ${JSON.stringify(res)}`);
      res.json()
    })
    .catch(error => {
      console.log(`response from backend error: ${error}`);
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>
          Comments
          &nbsp;
          <input type="text" value={this.state.value} name="comments" onChange={this.handleChange} />
        </label>

        <label>
          <input id="inspection" name="inspection" value={this.state.inspectio} />

        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default IssuesForm;
