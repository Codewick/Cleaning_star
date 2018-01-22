import React, { Component } from 'react';
import {
  BrowserRouter as Router,
 Redirect,
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

import LoginForm from './components/authentication/login';
import * as auth from './api/auth';

import SignOutForm from './components/authentication/signout'

import RegisterForm from './components/authentication/register';
import * as registerAPI from './api/registrations';

class App extends Component {
  state = {
    inspections: null,
    clients: null,
    selectedClientObjectID: null,
    registrations: null,
    employees: null
   }

  componentDidMount() {
    inspectionAPI.all()
      .then(inspections => {
        console.log('received inspections from server: ', inspections);
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



  handleLoginSubmission = (loginParams) => {
    let { email, password } = loginParams;
    // console.log("handleLoginSubmission received", { email, password })
    auth.loginAPI( email, password )
      .then((data) => {
        console.log('signed in', data)
        console.log('signed in with token', data.token)
        const token = data.token
        if (token) {
          inspectionAPI.all(token)
            .then(inspections => {
              this.setState({ inspections, token })
            })
            .catch(error => {
              console.log('error logging in: ', error)
            })
        }
      })
      .catch(error => {
        console.log('Failed to sign in with error: ', error);
      })
  }

  handleSignOutSubmission =() => {
    auth.signOut()
    this.setState({inspections:null})
  }


  handleRegisterSubmission = ( registration ) => {
    this.setState(({ registrations }) => (
      { registrations: [ registration ].concat(registrations) }
    ));
    console.log(registration);
    registerAPI.save(registration);
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
            <Nav />
            <Switch>

            //inspections
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


              //clients
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


              //Authentication
              <Route path='/signin' render={() => (
                <div>
                { auth.isSignedIn() && <Redirect to='/inspections'/> }

                  <LoginForm
                    onSubmit={this.handleLoginSubmission}/>
                </div>
              )
              }/>

               <Route path='/signout' render={() => (
                <SignOutForm
                  onSignOut={this.handleSignOutSubmission}/>
                 )
               }/>

               <Route path='/register' render={() => (
                <RegisterForm
                  onSubmit={this.handleRegisterSubmission}/>
                 )
               }/>


            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
