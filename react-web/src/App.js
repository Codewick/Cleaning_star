import React, { Component } from 'react';
import './App.css';
import InspectionList from './components/InspectionList';
import * as inspectionAPI from './api/inspections';
import * as clientAPI from './api/clients';
import InspectionForm from './components/InspectionForm';
import ClientForm from './components/ClientForm';

class App extends Component {
  state = {
    inspections: null,
    clients: null,
    selectedClientObjectID: null
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

  handleSelectClientValueChange = (selectedClientObjectID) => {
    console.log(`selectedClientObjectID: `, selectedClientObjectID);
    this.setState((prevState, props) => {
      console.log('setting state with: ', prevState, props)
      return { selectedClientObjectID: selectedClientObjectID }
    });

    console.log(`changed the state of the selectedClient to: `, this.state.selectedClientObjectID);
  }

  handleInspectionSubmission = (inspection) => {
    this.setState(({ inspections }) => (
      { inspections: [ inspection ].concat(inspections) }
    ));
    console.log(inspection);
    inspectionAPI.save(inspection);
  }

  handleClientSubmission = (client) => {
    this.setState(({ clients }) => (
      {clients: [ client ].concat(clients) }
    ));
    clientAPI.save(client);
  }

  render() {
    const { inspections, clients, selectedClientObjectID } = this.state;

    console.log(`re-rendering with selectedClientObjectID: `, selectedClientObjectID);

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
        <InspectionForm
          clients={clients}
          selectedClientObjectID={selectedClientObjectID}
          onChange={this.handleSelectClientValueChange}
          onSubmit={this.handleInspectionSubmission}
        />
        <ClientForm
          onSubmit={this.handleClientSubmission}
        />
      </div>
    );
  }
}

export default App;
