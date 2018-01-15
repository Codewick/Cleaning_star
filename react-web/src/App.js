import React, { Component } from 'react';
import {
  BrowserRouter as Router,
 Route,
 Link,
 Switch
} from 'react-router-dom';
import './App.css';
import InspectionList from './components/InspectionList';
import * as inspectionAPI from './api/inspections';
import * as clientAPI from './api/clients';
import InspectionForm from './components/InspectionForm';
import LoginForm from './components/authentication/login';
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

  // handleLoginSubmission = () => {
  //   LoginForm.save()
  // }

  handleRegisterSubmission = ( registration ) => {
    this.setState(({ registrations }) => (
      { registrations: [ registration ].concat(registrations) }
    ));
    console.log(registration);
    registerAPI.save(registration);
  }


  render() {
    const { inspections, clients, selectedClientObjectID, registrations } = this.state;

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
                 <Link to='/login'>Log In</Link>
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
               <Route path='/login' render={() => (
                <LoginForm
                  onSubmit={this.handleLoginSubmission}/>
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
