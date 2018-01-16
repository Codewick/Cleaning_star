import React, { Component } from 'react';
import {
  BrowserRouter as Router,
 Route,
 Link,
 Switch,
 Redirect
} from 'react-router-dom';
import './App.css';
import InspectionList from './components/InspectionList';
import * as inspectionAPI from './api/inspections';

import * as clientAPI from './api/clients';

import InspectionForm from './components/InspectionForm';

import LoginForm from './components/authentication/login';
import { loginAPI } from './api/logins';

import RegisterForm from './components/authentication/register';
import * as registerAPI from './api/registrations';

class App extends Component {
  state = {
    inspections: null,
    clients: null,
    selectedClientObjectID: null,
    registrations: null
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


  handleLoginSubmission = ({ email, password }) => {
    console.log("handleLoginSubmission received", { email, password })
    loginAPI( email, password )
      .then((data) => {
        console.log('signed in', data)
        const token = data.token
        if (token) {
          inspectionAPI.all(token)
            .then(inspections => {
              this.setState({ inspections, token })
            })
            .catch(error => {
              console.log(error)
            })
        }
      }

    )
  }


  handleRegisterSubmission = ( registration ) => {
    this.setState(({ registrations }) => (
      { registrations: [ registration ].concat(registrations) }
    ));
    console.log(registration);
    registerAPI.save(registration);
  }


  render() {
    const { inspections, clients, selectedClientObjectID, registrations, logins } = this.state;

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
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 <Link to='/employees/new'>Add Employees</Link>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 <Link to='/employees'>Show Employees</Link>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 <Link to='/signin'>Log In</Link>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 <Link to='/signout'>Sign Out</Link>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                 <Link to='/register'>New user</Link>
             </nav>
             <hr/>
             <Switch>

               <Route path='/inspections/new' render={() => (
                 <InspectionForm
                   clients={clients}

                   selectedClientObjectID={selectedClientObjectID}

                   onChange={this.handleSelectClientValueChange}

                   onSubmit={this.handleInspectionSubmission}
                 />
               )
               }/>




              //Authentication
               <Route path='/signin' render={() => (
                <LoginForm
                  onSubmit={this.handleLoginSubmission}/>
                 )
               }/>

               <Route path='/signout' render={() => (
                 <div>
                 { this.state.token && <Redirect to='/'/> }
                  <LoginForm
                    onSubmit={this.handleLoginSubmission}/>
                 </div>
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
