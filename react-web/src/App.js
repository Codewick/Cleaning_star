import React, { Component } from 'react';
import {
  BrowserRouter as Router,
 Route,
 Link,
 Switch
} from 'react-router-dom';
import './App.css';
import InspectionList from './components/InspectionList';
import ClientList from './components/ClientList';
import * as inspectionAPI from './api/inspections';
import * as clientAPI from './api/clients';
import * as employeeAPI from './api/employees';
import InspectionForm from './components/InspectionForm';
import InspectionPage from './pages/InspectionPage';
import ClientForm from './components/ClientForm';
import ClientPage from './pages/ClientPage';


class App extends Component {
  state = {
    inspections: null,
    clients: null,
    employees: null,
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

        employeeAPI.all()
          .then(employees => {
            this.setState({ employees })
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

  handleSelectEmployeeValueChange = (selectedEmployeeObjectID) => {
    console.log(`selectedEmployeeObjectID: `, selectedEmployeeObjectID);
    this.setState((prevState, props) => {
      console.log('setting state with: ', prevState, props)
      return { selectedEmployeeObjectID: selectedEmployeeObjectID }
    });

    console.log(`changed the state of the selectedClient to: `, this.state.selectedEmployeeObjectID);
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
    const { inspections, clients, selectedClientObjectID, selectedEmployeeObjectID, employees } = this.state;

    console.log(`re-rendering with selectedClientObjectID: `, selectedClientObjectID);

      return (
        <Router>
          <div className="App">
            <nav>
                <Link to='/inspections/new'>Add Inspection</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/inspections'>Show Inspections</Link>
                <Link to='/clients/new'>Add Client</Link>
                <Link to='/clients'>Show Clients</Link>
            </nav>
            <hr/>
            <Switch>

              <Route path='/inspections/new' render={() => (
                <InspectionForm
                  clients={clients}
                  employees={employees}
                  selectedClientObjectID={selectedClientObjectID}
                  selectedEmployeeObjectID={selectedEmployeeObjectID}
                  onChange={this.handleSelectClientValueChange}
                  onChange={this.handleSelectEmployeeValueChange}
                  onSubmit={this.handleInspectionSubmission}
                />
              )
              }/>

              <Route path='/inspections' render={() => (
               <InspectionPage inspections={inspections}/>
                )
              }/>

              <Route path='/clients/new' render={() => (
                <ClientForm
                  onSubmit={this.handleClientSubmission}
                />
              )
              }/>

              <Route path='/clients' render={() => (
               <ClientPage clients={clients}/>
                )
              }/>



            </Switch>
          </div>
      </Router>

    );
  }
}
export default App;
