import React, { Component } from 'react';
import './App.css';
import InspectionList from './components/InspectionList';
import * as inspectionAPI from './api/inspections';
import InspectionForm from './components/InspectionForm';

class App extends Component {
  state = { inspections: null }

  componentDidMount() {
      inspectionAPI.all()
        .then(inspections => {
          this.setState({ inspections })
        })
    }

  handleInspectionSubmission = (inspection) => {
    this.setState(({ inspections }) => (
      { inspections: [ inspection ].concat(inspections) }
    ));

    inspectionAPI.save(inspection);
  }
  render() {
    const { inspections } = this.state;
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
        <InspectionForm onSubmit={this.handleInspectionSubmission} />
      </div>
    );
  }
}

export default App;
