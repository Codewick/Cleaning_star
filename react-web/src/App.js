import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import * as inspectionAPI from './api/inspections';
import * as clientAPI from './api/clients';
import * as employeeAPI from './api/employees';
import InspectionForm from './components/InspectionForm';
import InspectionPage from './pages/InspectionPage';
import ClientForm from './components/ClientForm';
import ClientPage from './pages/ClientPage';
import EmployeeForm from './components/EmployeeForm';
import EmployeePage from './pages/EmployeePage';
import IssuesForm from './components/IssuesForm';
import Edit from './components/Edit';


class App extends Component {
  state = {
    inspections: null,
    clients: null,
    employees: null,
    selectedClientObjectID: null
   }

  componentDidMount() {                       //making AJAX callto fetch data from API
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

  handleEmployeeSubmission = (employee) => {
    this.setState(({ employees }) => (
      {employees: [ employee ].concat(employees) }
    ));
    employeeAPI.save(employee);
  }

  handleInspectionUpdateSubmission = (inspection) => {

  }


  render() {
    const { inspections, clients, selectedClientObjectID, selectedEmployeeObjectID, employees } = this.state;

    console.log(`re-rendering with selectedClientObjectID: `, selectedClientObjectID);

      return (
        <Router>
          <div className="App">
            <Nav />
            <Switch>

            <Route path='/inspections/update/:id' render={  ({ match }) => {
                console.log('update id', match);
                const id = match.params.id

                const inspection = !!inspections ? inspections.find((inspection) => inspection._id === id) : {}
                const client = !!clients && !!inspections ? clients.find((client) => client._id === inspection.client) : {}
                const employee = !!employees && !!inspections ? employees.find((employee) => employee._id === inspection.employee) : {}
                return (
              <Edit
                employee={employee}
                inspection={inspection}
                client={client}
                clients={clients}
                employees={employees}
                selectedClientObjectID={selectedClientObjectID}
                selectedEmployeeObjectID={selectedEmployeeObjectID}
                onClientValueChange={this.handleSelectClientValueChange}
                onEmployeeValueChange={this.handleSelectEmployeeValueChange}
                onSubmit={this.handleInspectionUpdateSubmission}
              />
            )}} />


              <Route path='/inspections/new' render={() => (
                <InspectionForm
                  clients={clients}
                  employees={employees}
                  selectedClientObjectID={selectedClientObjectID}
                  selectedEmployeeObjectID={selectedEmployeeObjectID}
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
              )}/>

              <Route path='/employees' render={() => (
                <EmployeePage employees={employees}/>
              )}/>

            </Switch>
          </div>
      </Router>
    );
  }
}
export default App;
