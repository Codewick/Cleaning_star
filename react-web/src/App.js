import React, { Component } from 'react';
import './App.css';
import InspectionList from './components/InspectionList';
import * as inspectionAPI from './api/inspections';
import * as clientAPI from './api/clients';
import InspectionForm from './components/InspectionForm';

class App extends Component {
  state = {
    inspections: null,
    clients: null
   }

  componentDidMount() {
      inspectionAPI.all()
        .then(inspections => {
          this.setState({ inspections })
        })

      clientAPI.all()
        .then(clients => {
          this.setState({ clients })
        })
    }

  handleInspectionSubmission = (inspection) => {
    this.setState(({ inspections }) => (
      { inspections: [ inspection ].concat(inspections) }
    ));
    console.log(inspection);
    inspectionAPI.save(inspection);
  }
  render() {
    const { inspections, clients } = this.state;
    return (
      <div className="App">
        {
          inspections ? (
            <InspectionList inspections={ inspections } />
          ) : (
            "Loading..."
          )
        }

        <hr/>
        <InspectionForm clients={clients} onSubmit={this.handleInspectionSubmission} />
      </div>
    );
  }
}

export default App;
