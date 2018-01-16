import React, { Component } from 'react';
import {
  BrowserRouter as Router,
<<<<<<< Updated upstream
  Route,
  Switch
=======
 Route,
 Link,
 Switch
>>>>>>> Stashed changes
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import InspectionList from './components/InspectionList';
import ClientList from './components/ClientList';
import EmployeeList from './components/EmployeeList';
import * as inspectionAPI from './api/inspections';
import * as clientAPI from './api/clients';
import * as employeeAPI from './api/employees';
import InspectionForm from './components/InspectionForm';
import InspectionPage from './pages/InspectionPage';
<<<<<<< Updated upstream
import ClientForm from './components/ClientForm';
import ClientPage from './pages/ClientPage';
import EmployeeForm from './components/EmployeeForm';
import EmployeePage from './pages/EmployeePage';

=======
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    employeeAPI.all()
      .then(employees => {
        this.setState({ employees })
      })
  }
=======
      clientAPI.all()
        .then(clients => {
          this.setState({ clients })
        })

        employeeAPI.all()
          .then(employees => {
            this.setState({ employees })
          })
    }
>>>>>>> Stashed changes

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

  handleEmployeeSubmission = (employee) => {
    this.setState(({ employees }) => (
      {employees: [ employee ].concat(employees) }
    ));
    employeeAPI.save(employee);
  }

  render() {
    const { inspections, clients, selectedClientObjectID, selectedEmployeeObjectID, employees } = this.state;

    console.log(`re-rendering with selectedClientObjectID: `, selectedClientObjectID);

      return (
        <Router>
          <div className="App">
<<<<<<< Updated upstream

            <Nav />

=======
            <nav>
                <Link to='/inspections/new'>Add Inspection</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/inspections'>Show Inspections</Link>
            </nav>
            <hr/>
>>>>>>> Stashed changes
            <Switch>

              <Route path='/inspections/new' render={() => (
                <InspectionForm
                  clients={clients}
                  employees={employees}
                  selectedClientObjectID={selectedClientObjectID}
                  selectedEmployeeObjectID={selectedEmployeeObjectID}
<<<<<<< Updated upstream
                  onClientValueChange={this.handleSelectClientValueChange}
                  onEmployeeValueChange={this.handleSelectEmployeeValueChange}
                  onSubmit={this.handleInspectionSubmission}
                />
              )}/>

              <Route path='/inspections' render={() => (
               <InspectionPage inspections={inspections} clients={clients} employees={employees} />
              )}/>

              <Route path='/clients/new' render={() => (
                <ClientForm onSubmit={this.handleClientSubmission} />
              )}/>

              <Route path='/clients' render={() => (
               <ClientPage clients={clients}/>
              )}/>

              // employees
              <Route path='/employees/new' render={() => (
                <EmployeeForm onSubmit={this.handleEmployeeSubmission} />
                )
              }/>

              <Route path='/employees' render={() => (
                <EmployeePage employees={employees}/>
              )}/>

            </Switch>
          </div>
      </Router>

=======
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

            </Switch>
          </div>
      </Router>
>>>>>>> Stashed changes
    );
  }
}
export default App;
